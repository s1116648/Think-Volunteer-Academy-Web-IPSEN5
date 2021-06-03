import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: "app-top-nav",
  templateUrl: "./top-nav.component.html",
  styleUrls: ["./top-nav.component.scss"]
})
export class TopNavComponent implements OnInit {

    coursesPath = "/courses";
    adminPanelPath = ""; // ToDo insert admin path
    settingsPath = ""; // ToDo insert settings path
    logoutPath = "/login";

    isAdmin: boolean;

    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        this.isAdmin = this.checkIfAdmin();
    }

    // ToDo, don't create it if you aren't logged in.
    checkIfLoggedIn(): boolean {
        return false;
    }

    // ToDo If permissions are finished, make this method useful.
    checkIfAdmin(): boolean {
        return true;
    }

    logout(): void {
        this.authService.logout();
    }

}
