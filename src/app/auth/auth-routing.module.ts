import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IsNotAuthenticatedGuard } from "./is-not-authenticated.guard";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { CreateResetPasswordComponent } from "./create-reset-password/create-reset-password.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";

const routes: Routes = [
	{
		path: "login",
		component: LoginComponent,
		canActivate: [IsNotAuthenticatedGuard],
	},
	{
		path: "register",
		component: RegisterComponent,
		canActivate: [IsNotAuthenticatedGuard],
	},
	{
		path: "reset-password",
		component: CreateResetPasswordComponent,
		canActivate: [IsNotAuthenticatedGuard],
	},
	{
		path: "reset-password/:token",
		component: ResetPasswordComponent,
		canActivate: [IsNotAuthenticatedGuard],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AuthRoutingModule {}
