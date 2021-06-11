import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { User } from "src/app/user/user.model";
import { AuthService } from "../auth.service";
import { LoginDTO } from "../dto/login.dto";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
	icons = { faArrowRight };

	error: HttpErrorResponse;

	isLoading: boolean = false;

	constructor(private authService: AuthService, private router: Router) {}

	ngOnInit(): void {}

	login(form: NgForm): void {
		if (form.invalid) return;
		this.isLoading = true;

		const values: LoginDTO = form.value;

		this.authService.login(values).subscribe(
			() => this.router.navigate(["/courses"]),
			(error: HttpErrorResponse) => {
				this.isLoading = false;
				this.error = error;
			}
		);
	}
}
