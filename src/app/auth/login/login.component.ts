import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { User } from "src/app/user/user.model";
import { AuthService } from "../auth.service";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
	icons = { faArrowRight };

	constructor(private authService: AuthService, private router: Router) {}

	ngOnInit(): void {}

	login(form: NgForm): void {
		if (form.invalid) return;

		const values: {
			email: string;
			password: string;
		} = form.value;

		this.authService
			.login({
				email: values.email,
				password: values.password,
			})
			.subscribe(
				(user: User) => {
					alert("Welcome " + user.firstname);
				},
				(error: HttpErrorResponse) => {
					console.log(error);
				}
			);
	}
}
