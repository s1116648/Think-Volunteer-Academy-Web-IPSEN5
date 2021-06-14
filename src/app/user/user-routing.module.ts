import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { ProfileComponent } from "./profile/profile.component";
import { UserSettingsComponent } from "./user-settings/user-settings.component";

const routes: Routes = [
	{
		path: "user/settings",
		component: UserSettingsComponent,
		canActivate: [AuthGuard],
	},
	{
		path: "profile",
		component: ProfileComponent,
		canActivate: [AuthGuard],
	},
	{
		path: "profile/:id",
		component: ProfileComponent,
		canActivate: [AuthGuard],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class UserRoutingModule {}
