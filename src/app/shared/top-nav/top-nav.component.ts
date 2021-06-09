import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../auth/auth.service";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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

	isAdmin: boolean;

	collapsedOnPhone = true;

	icons = { faBars };

	constructor(private authService: AuthService) {}

	ngOnInit(): void {
		this.isAdmin = this.checkIfAdmin();
	}

	// ToDo If permissions are finished, make this method useful.
	checkIfAdmin(): boolean {
		return true;
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
