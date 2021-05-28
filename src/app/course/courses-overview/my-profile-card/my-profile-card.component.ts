import {Component, Input, OnInit} from "@angular/core";
import { ProfileCardModel } from "./profile-card.model";

@Component({
  selector: "app-course-profile-card",
  templateUrl: "./my-profile-card.component.html",
  styleUrls: ["my-profile-card.component.scss"]
})
export class MyProfileCardComponent implements OnInit {

  profileCardModel: ProfileCardModel;

  constructor() {
    this.profileCardModel = this.generateProfileCardModel();
  }

  ngOnInit(): void {
  }

  generateProfileCardModel(): ProfileCardModel {
    const profileCardModel = new ProfileCardModel("1", "Jane Doe", "assets/images/avatar-temp.jpg");
    return profileCardModel;
  }

}
