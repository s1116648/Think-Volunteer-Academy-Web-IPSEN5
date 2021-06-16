import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthInterceptorService } from "./auth.interceptor";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { RegisterComponent } from "./register/register.component";
import { CreateResetPasswordComponent } from "./create-reset-password/create-reset-password.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";

@NgModule({
    declarations: [LoginComponent, RegisterComponent, CreateResetPasswordComponent, ResetPasswordComponent],
    imports: [
        CommonModule,
        FontAwesomeModule,
        AuthRoutingModule,
        FormsModule,
        RouterModule,
        HttpClientModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true
        }
    ]
})
export class AuthModule {
}
