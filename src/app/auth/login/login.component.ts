import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { AuthService } from "../auth.service";
import { LoginDTO } from "../dto/login.dto";
import { NotifierService } from "angular-notifier";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
	icons = { faArrowRight };

	isLoading: boolean = false;

	constructor(
		private authService: AuthService,
		private router: Router,
		private notifierService: NotifierService) {
	}

	ngOnInit(): void {
	}

	login(form: NgForm): void {
		if (form.invalid) return;
		this.isLoading = true;

		const values: LoginDTO = form.value;

		this.authService.login(values).subscribe(
			() => this.router.navigate(["/courses"]),
			(error: HttpErrorResponse) => {
				this.isLoading = false;
				if (error.status === 500) {
					this.notifierService.notify("error", "Something went wrong, try again.", error.message);
				} else if (error.status === 401) {
					this.notifierService.notify("error", "That user does not exist.", error.message);
				}
			}
		);
	}
}
