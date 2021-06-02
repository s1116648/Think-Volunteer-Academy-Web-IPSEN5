import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-top-nav",
  templateUrl: "./top-nav.component.html",
  styleUrls: ["./top-nav.component.scss"]
})
export class TopNavComponent implements OnInit {

    coursesPath = "/courses";
    adminPanelPath = ""; // ToDo insert admin path
    settingsPath = ""; // ToDo insert settings path
    logoutPath = ""; // ToDo insert logout path

    isAdmin: boolean;

    constructor() {}

    ngOnInit(): void {
        this.isAdmin = this.checkIfAdmin();
    }

    // ToDo If permissions are finished, make this method useful.
    checkIfAdmin(): boolean {
        return true;
    }

}
