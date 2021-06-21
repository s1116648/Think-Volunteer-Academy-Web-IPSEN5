import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Permission } from "./permission.model";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { User } from "../../user/user.model";
import { UserService } from "../../user/user.service";
import { AuthService } from "../../auth/auth.service";

@Injectable({
  providedIn: "root"
})
export class PermissionService {

  constructor(
      private http: HttpClient,
      private userService: UserService,
      private authService: AuthService
  ) {}

  fetchPermissions(): Observable<Permission[]> {
    return this.http.get<any>("/permissions").pipe(
      map((responseData: { items: Permission[] }) => {
        return responseData.items;
      })
    );
  }

  hasPermissions(permissions: string[]): Observable<boolean> {
    return this.userService.getByID(this.authService.loginInfo.getValue().user.id).pipe(map((user: User) => {
        return permissions.every(permission =>  user.role.permissions.map(p => p.name).includes(permission));
    }));
  }
}
