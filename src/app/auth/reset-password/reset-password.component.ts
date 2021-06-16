import { Component, OnInit } from "@angular/core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { HttpErrorResponse } from "@angular/common/http";
import { AuthService } from "../auth.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormGroup, NgForm } from "@angular/forms";
import { CreateResetPasswordDTO } from "../dto/create-reset-password.dto";
import { ResetPasswordDTO } from "../dto/reset-password.dto";

@Component({
    selector: "app-reset-password",
    templateUrl: "./reset-password.component.html",
    styleUrls: ["./reset-password.component.scss"]
})
export class ResetPasswordComponent implements OnInit {

    icons = { faArrowRight };

    error: HttpErrorResponse;

    isLoading: boolean = false;

    token: string;

    constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.token = params.token;
        });
    }

    resetPassword(form: NgForm): void {
        if (form.invalid || !this.token) return;
        this.isLoading = true;

        const values: ResetPasswordDTO = form.value;

        this.authService.ResetPassword(this.token, values).subscribe(
            () => this.router.navigate(["/login"]),
            (error: HttpErrorResponse) => {
                this.isLoading = false;
                this.error = error;
            }
        );
    }

}
