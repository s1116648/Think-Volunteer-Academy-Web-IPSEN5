import {Component, OnInit} from "@angular/core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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

    initialiseProfile(): void {
        this.profileImgPath = "assets/images/avatar-temp.jpg";
        this.firstName = "Jane";
        this.lastName = "Doe";
    }

}
