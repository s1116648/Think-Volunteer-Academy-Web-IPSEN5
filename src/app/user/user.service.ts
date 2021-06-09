import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User } from "./user.model";
import { UpdateProfileDto } from "./dto/update-profile.dto";
import { ChangePasswordDto } from "./dto/change-password.dto";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UserService {
    constructor(private http: HttpClient){}

    fetchUsers(): Observable<User[]> {
        return this.http.get<any>("/users").pipe(
            map((responseData: { items: User[] }) => {
                return responseData.items;
            })
        );
    }

    updateProfile(id: string, dto: UpdateProfileDto): Observable<User> {
        return this.http.patch<User>("/users/" + id, dto);
    }

    changePassword(dto: ChangePasswordDto): Observable<User> {
        return this.http.patch<User>("/users/change-password", dto);
    }

    delete(id: string): Observable<void> {
        return this.http.delete<void>("/users/" + id);
    }
}
