import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { RegisterDTO } from "../dto/register.dto";

@Component({
	selector: "app-register",
	templateUrl: "./register.component.html",
	styleUrls: ["./register.component.scss", "../login/login.component.scss"],
})
export class RegisterComponent implements OnInit {
	icons = { faArrowRight };

	constructor(private authService: AuthService, private router: Router) {}

	ngOnInit(): void {}

	register(form: NgForm): void {
		if (form.invalid) return;

		const values: RegisterDTO = form.value;

		this.authService.register(values).subscribe(
			() => {
				this.router.navigate(["/login"]);
			},
			(error: HttpErrorResponse) => {
				console.log(error);
			}
		);
	}
}
