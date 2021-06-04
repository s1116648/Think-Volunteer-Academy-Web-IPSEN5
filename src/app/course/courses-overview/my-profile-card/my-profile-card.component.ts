import {Component, OnInit} from "@angular/core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { BehaviorSubject } from "rxjs";
import { LoginInfo } from "../../../auth/dto/login-info.dto";

@Component({
  selector: "app-course-profile-card",
  templateUrl: "./my-profile-card.component.html",
  styleUrls: ["my-profile-card.component.scss"]
})
export class MyProfileCardComponent implements OnInit {

    profileImgPath: string;
    firstName: string;
    lastName: string;
    icons = { faArrowRight };

    constructor() {
    }

    ngOnInit(): void {
        this.initialiseProfile();
    }

    // ToDo initialise profile img correctly
    initialiseProfile(): void {
        const loginInfo = localStorage.getItem("loginInfo");
        const loginInfoJson = JSON.parse(loginInfo);
        this.firstName = loginInfoJson.user.firstname;
        this.lastName = loginInfoJson.user.lastname;
        this.profileImgPath = "assets/images/avatar-temp.jpg";
    }
}
