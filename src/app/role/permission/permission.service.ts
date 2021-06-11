import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Permission } from "./permission.model";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PermissionService {

  constructor(private http: HttpClient) {}

  fetchPermissions(): Observable<Permission[]> {
    return this.http.get<any>("/permissions").pipe(
      map((responseData: { items: Permission[] }) => {
        return responseData.items;
      })
    );
  }
}
