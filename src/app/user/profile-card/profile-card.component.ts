import { Component, OnInit } from "@angular/core";

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
        const currentUser = JSON.parse(localStorage.getItem("loginInfo")).user;
        this.setName(currentUser.firstname, currentUser.lastname);
    }

    setName(firstname: string, lastname: string): void {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
