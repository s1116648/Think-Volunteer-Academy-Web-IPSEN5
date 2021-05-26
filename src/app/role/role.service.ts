import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Role } from "./role.model";
import { LoginDTO } from "../auth/dto/login.dto";
import { User } from "../user/user.model";
import { RoleDTO } from "./dto/role.dto";

@Injectable({
  providedIn: "root"
})

export class RoleService {

  roles: Role[] = [
    {
      id: 1,
      name: "admin"
    },
    {
      id: 2,
      name: "contentcreator"
    },
    {
      id: 3,
      name: "user"
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

  create(dto: RoleDTO): Observable<Role> {
    return this.http
      .post<Role>("/roles", {
        name: dto.name,
      });
  }
}
