import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../auth/auth.service";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { PermissionService } from "../../role/permission/permission.service";

@Component({
	selector: "app-top-nav",
	templateUrl: "./top-nav.component.html",
	styleUrls: ["./top-nav.component.scss"],
})
export class TopNavComponent implements OnInit {
	coursesPath = "/courses";
	adminPanelPath = "/admin";
	settingsPath = "user/settings";
	logoutPath = "/login";

	canSeeAdminPanel: boolean;

	collapsedOnPhone = true;

	icons = { faBars };


	constructor(
		private authService: AuthService,
		private permissionService: PermissionService
	) {}

	ngOnInit(): void {
		this.checkIfAdmin();
	}

	checkIfAdmin(): void {
		this.permissionService.hasPermissions(["course.view"]).subscribe((canSeeAdminPanel: boolean) => {
			this.canSeeAdminPanel = canSeeAdminPanel;
		});
	}

	hamburgerClicked(): void {
		if (this.collapsedOnPhone) {
			document.getElementById("options").style.display = "flex";
			this.collapsedOnPhone = false;
		} else {
			document.getElementById("options").style.display = "none";
			this.collapsedOnPhone = true;
		}
	}

	logout(): void {
		this.authService.logout();
	}
}
