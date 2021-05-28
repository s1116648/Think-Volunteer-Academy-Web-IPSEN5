import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Permission } from "./permission.model";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Role } from "../role.model";

@Injectable({
  providedIn: "root"
})
export class PermissionService {
  permisions: Permission[] = [
    {
      value: "course.create",
      description: "This allows you to create a course"
    },
    {
      value: "course.update",
      description: "This allows you to update a course"
    },
    {
      value: "course.delete",
      description: "This allows you to delete a course"
    }
  ];

  constructor(private http: HttpClient) {}

  fetchMock(): Permission[] { return this.permisions; }

  fetchPermissions(): Observable<Permission[]> {
    return this.http.get<any>("/permissions").pipe(
      map((responseData: { items: Permission[] }) => {
        return responseData.items;
      })
    );
  }
}
