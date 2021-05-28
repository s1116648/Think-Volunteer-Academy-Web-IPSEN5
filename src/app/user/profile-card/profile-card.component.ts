import { Component, OnInit } from "@angular/core";
import { User } from "../user.model";

@Component({
    selector: "app-profile-card",
    templateUrl: "./profile-card.component.html",
    styleUrls: ["./profile-card.component.scss"]
})
export class ProfileCardComponent implements OnInit {

    firstname: string;
    lastname: string;

    constructor() {
    }

    ngOnInit(): void {
        // const currentUser: User = JSON.parse(localStorage.getItem("loginInfo")).user;
        // this.setName(currentUser.firstname, currentUser.lastname);

        this.setName("Lars", "Verhoorn");
    }

    setName(firstname: string, lastname: string): void {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
