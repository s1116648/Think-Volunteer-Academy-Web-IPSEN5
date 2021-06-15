import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "../../auth/auth.service";
import { UserService } from "../../user/user.service";
import { User } from "../../user/user.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class PermissionGuard implements CanActivate {
	constructor(
		private authService: AuthService,
		private userService: UserService,
		private router: Router
	) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
		const requiredPermissions = route.data.permissions as Array<string>;
		return this.userService.getByID(this.authService.loginInfo.getValue().user.id).pipe(map((user: User) => {
			const userPermissions = user.role.permissions;
			const hasPermissions = requiredPermissions.every(permission => userPermissions.map(p => p.name).includes(permission));

			if (!hasPermissions) return this.router.createUrlTree([".."]);
			return true;
		}));
	}
}
