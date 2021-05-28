import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Role } from "../role/role.model";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { User } from "./user.model";

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
}
