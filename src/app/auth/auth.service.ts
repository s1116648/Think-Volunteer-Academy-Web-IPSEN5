import { HttpClient } from "@angular/common/http";
import { map, tap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { LoginDTO } from "./dto/login.dto";
import { LoginInfo } from "./dto/login-info.dto";
import { User } from "../user/user.model";
import { BehaviorSubject, Observable } from "rxjs";
import jwt_decode from "jwt-decode";
import { DecodedJWT } from "./decoded-jwt";
import { RegisterDTO } from "./dto/register.dto";
import { CreateResetPasswordDTO } from "./dto/create-reset-password.dto";
import { ResetPasswordDTO } from "./dto/reset-password.dto";

@Injectable({
    providedIn: "root"
})
export class AuthService {
    loginInfo: BehaviorSubject<LoginInfo> = new BehaviorSubject<LoginInfo>(
        null
    );

    constructor(private http: HttpClient) {
    }

    logout(): void {
        this.loginInfo.next(null);
        localStorage.removeItem("loginInfo");
    }

    login(dto: LoginDTO): Observable<User> {
        return this.http
            .post<LoginInfo>("/auth/login", {
                email: dto.email,
                password: dto.password
            })
            .pipe(
                tap((loginInfo: LoginInfo): void => {
                    this.handleAuthentication(loginInfo);
                }),
                map((loginInfo: LoginInfo): User => loginInfo.user)
            );
    }

    register(dto: RegisterDTO): Observable<User> {
        return this.http.post<User>("/auth/register", dto);
    }

    isLoggedIn = (): boolean =>
        !!this.loginInfo.getValue() && !this.JWTIsExpired();

    autoLogin(): void {
        const loginInfoJson = localStorage.getItem("loginInfo");

        if (!loginInfoJson) return;

        const loginInfo = JSON.parse(loginInfoJson);
        if (!loginInfo) return;
        this.loginInfo.next(loginInfo);
    }

    private JWTIsExpired(): boolean {
        const token = this.loginInfo.getValue().token;
        const decoded: DecodedJWT = jwt_decode(token);
        const isExpired =
            Math.floor(new Date().getTime() / 1000) >= decoded.exp;
        if (isExpired) this.loginInfo.next(null);
        return isExpired;
    }

    public handleAuthentication(loginInfo: LoginInfo): void {
        this.loginInfo.next(loginInfo);
        localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
    }

    public CreateResetPassword(dto: CreateResetPasswordDTO): Observable<null> {
        return this.http.post<null>("/auth/reset-password", dto);
    }

    public ResetPassword(token: string, dto: ResetPasswordDTO): Observable<null> {
        return this.http.post<null>(`/auth/reset-password/${token}`, dto);
    }
}
