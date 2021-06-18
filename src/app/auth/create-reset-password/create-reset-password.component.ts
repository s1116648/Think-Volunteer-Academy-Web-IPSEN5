import { Component, OnInit } from "@angular/core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { HttpErrorResponse } from "@angular/common/http";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { LoginDTO } from "../dto/login.dto";
import { CreateResetPasswordDTO } from "../dto/create-reset-password.dto";

@Component({
    selector: "app-reset-password",
    templateUrl: "./create-reset-password.component.html",
    styleUrls: ["./create-reset-password.component.scss"]
})
export class CreateResetPasswordComponent implements OnInit {

    icons = { faArrowRight };

    error: HttpErrorResponse;

    isLoading: boolean = false;
    success: boolean = false;

    constructor(private authService: AuthService, private router: Router) {
    }

    ngOnInit(): void {
    }

    resetPassword(form: NgForm): void {
        if (form.invalid) return;
        this.isLoading = true;

        const values: CreateResetPasswordDTO = form.value;

        this.authService.CreateResetPassword(values).subscribe(
            () => {
                this.isLoading = false;
                this.success = true;
                this.error = null;
            },
            (error: HttpErrorResponse) => {
                this.isLoading = false;
                this.error = error;
                this.success = false;
            }
        );
    }

}
