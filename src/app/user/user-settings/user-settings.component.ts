import {Component, HostListener, OnInit} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {LoginInfo} from "../../auth/dto/login-info.dto";
import {User} from "../user.model";

@Component({
  selector: "app-user-settings",
  templateUrl: "./user-settings.component.html",
  styleUrls: ["./user-settings.component.scss"]
})
export class UserSettingsComponent implements OnInit {

  firstname: string;
  lastname: string;
  email: string;

  ngOnInit(): void {
    const currentUser: User = JSON.parse(localStorage.getItem("loginInfo")).user;
    this.setName(currentUser.firstname, currentUser.lastname);
    this.setEmail(currentUser.email);
  }

  setName(firstname: string, lastname: string): void {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  setEmail(email: string): void {
    this.email = email;
  }

}
