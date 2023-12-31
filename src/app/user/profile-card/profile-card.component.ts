import { Component, OnInit } from "@angular/core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { User } from "../user.model";
import { AuthService } from "../../auth/auth.service";

@Component({
	selector: "app-profile-card",
	templateUrl: "./profile-card.component.html",
	styleUrls: ["./profile-card.component.scss"],
})
export class ProfileCardComponent implements OnInit {
	icons = { faArrowRight };

	currentUser: User;

	constructor(private authService: AuthService) {}

	ngOnInit(): void {
		this.currentUser = this.authService.loginInfo.getValue().user;
	}
}
