import { HttpClient } from "@angular/common/http";
import { map, tap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { LoginDTO } from "./dto/login.dto";
import { LoginInfo } from "./dto/login-info.dto";
import { User } from "../user/user.model";
import { BehaviorSubject, Observable } from "rxjs";
// import { HttpResult } from "../shared/http-result";
import jwt_decode from "jwt-decode";
import { DecodedJWT } from "./decoded-jwt";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	loginInfo: BehaviorSubject<LoginInfo> = new BehaviorSubject<LoginInfo>(
		null
	);

	constructor(private http: HttpClient) {}

	logout(): void {
		this.loginInfo.next(null);
		localStorage.removeItem("loginInfo");
	}

	login(dto: LoginDTO): Observable<User> {
		const observer: Observable<User> = this.http
			.post<LoginInfo>("/auth/login", {
				email: dto.email,
				password: dto.password,
			})
			.pipe(
				tap((loginInfo: LoginInfo): void => {
					this.handleAuthentication(loginInfo);
				}),
				map((loginInfo: LoginInfo): User => loginInfo.user)
			);
		return observer;
	}

	isLoggedIn = (): boolean =>
		!!this.loginInfo.getValue() && !this.JWTIsExpired();

	autoLogin(): void {
		const loginInfo = JSON.parse(localStorage.getItem("loginInfo")!);
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

	private handleAuthentication(loginInfo: LoginInfo): void {
		this.loginInfo.next(loginInfo);
		localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
	}
}
