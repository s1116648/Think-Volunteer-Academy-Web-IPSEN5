import { Component, OnInit } from "@angular/core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { AuthService } from "src/app/auth/auth.service";
import { User } from "../user.model";

@Component({
	selector: "app-profile-card",
	templateUrl: "./profile-card.component.html",
	styleUrls: ["./profile-card.component.scss"],
})
export class ProfileCardComponent implements OnInit {
	icons = { faArrowRight };

	firstname: string;
	lastname: string;

	constructor(private authService: AuthService) {}

	ngOnInit(): void {
		const currentUser: User = this.authService.loginInfo.getValue().user;
		this.setName(currentUser.firstname, currentUser.lastname);
	}

	setName(firstname: string, lastname: string): void {
		this.firstname = firstname;
		this.lastname = lastname;
	}
}
