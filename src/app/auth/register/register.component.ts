import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { RegisterDTO } from "../dto/register.dto";
import { NotifierService } from "angular-notifier";

@Component({
	selector: "app-register",
	templateUrl: "./register.component.html",
	styleUrls: ["./register.component.scss", "../login/login.component.scss"]
})
export class RegisterComponent implements OnInit {
	icons = { faArrowRight };

	isLoading: boolean = false;

	constructor(private authService: AuthService, private router: Router, private notifierService: NotifierService) {
	}

	ngOnInit(): void {
	}

	register(form: NgForm): void {
		if (form.invalid) return;
		this.isLoading = true;

		const values: RegisterDTO = form.value;

		this.authService.register(values).subscribe(
			() => {
				this.notifierService.notify("success", "Account registered.");
				this.router.navigate(["/login"]);
			}, (e: HttpErrorResponse) => {
				this.notifierService.notify("error", "An error occurred while registering account.");
				this.isLoading = false;
			}
		);
	}
}
