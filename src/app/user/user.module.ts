import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserOverviewComponent } from "./user-overview/user-overview.component";
import { UserRowComponent } from "./user-row/user-row.component";
import { UserSettingsComponent } from "./user-settings/user-settings.component";
import { ProfileCardComponent } from "./profile-card/profile-card.component";
import { UserRoutingModule } from "./user-routing.module";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SetUserRoleComponent } from "./modals/set-user-role/set-user-role.component";
import { SharedModule } from "../shared/shared.module";
import { ProfileComponent } from "./profile/profile.component";
import { RoleModule } from "../role/role.module";

@NgModule({
	declarations: [
		UserSettingsComponent,
		ProfileCardComponent,
		UserOverviewComponent,
		UserRowComponent,
		SetUserRoleComponent,
		ProfileComponent,
	],
    imports: [
        CommonModule,
        UserRoutingModule,
        RouterModule,
        FormsModule,
        FontAwesomeModule,
        SharedModule,
        RoleModule
    ],
	exports: [
		UserSettingsComponent,
		UserOverviewComponent,
		ProfileCardComponent,
	],
})
export class UserModule {}
