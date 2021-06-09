import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Role } from "./role.model";
import { CreateRoleDTO } from "./dto/create-role-dto";
import { UpdateRoleDTO } from "./dto/update-role-dto";

@Injectable({
  providedIn: "root"
})

export class RoleService {
  constructor(private http: HttpClient) { }

  fetchRoles(): Observable<Role[]> {
    return this.http.get<any>("/roles").pipe(
      map((responseData: { items: Role[] }) => {
        return responseData.items;
      })
    );
  }

  create(role: CreateRoleDTO): Observable<Role> {
    return this.http
      .post<Role>("/roles", {
        name: role.name,
        description: role.description,
        permissions: role.permissions
      });
  }

  update(roleID: string, role: UpdateRoleDTO): Observable<Role> {
    return this.http
        .patch<Role>(`/roles/${roleID}`, {
          name: role.name,
          description: role.description,
          permissions: role.permissions
        });
  }
}
