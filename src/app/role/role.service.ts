import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Role } from "./role.model";

@Injectable({
  providedIn: "root"
})

export class RoleService {

  roles: Role[] = [
    {
      id: "test",
      name: "admin",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "test2",
      name: "contentcreator",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "test3",
      name: "user",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  constructor(private http: HttpClient) { }

  fetchNonReal(): Role[] {
    return this.roles;
  }

  fetchRoles(): Observable<Role[]> {
    return this.http.get<any>("/roles").pipe(
      map((responseData: { items: Role[] }) => {
        return responseData.items;
      })
    );
  }

  create(role: Role): Observable<Role> {
    return this.http
      .post<Role>("/roles", {
        name: role.name,
      });
  }
}
