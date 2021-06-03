import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User } from "./user.model";
import { UpdateProfileDto } from "./dto/update-profile.dto";

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

    updateProfile(dto: UpdateProfileDto): Observable<User> {
        return this.http.patch<User>("/users/settings", dto);
    }
}
