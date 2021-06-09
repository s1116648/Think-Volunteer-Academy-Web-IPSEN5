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
import { SharedModule } from "../shared/shared.module";

@NgModule({
	declarations: [
		UserSettingsComponent,
		ProfileCardComponent,
		UserOverviewComponent,
		UserRowComponent,
	],
	exports: [
		UserSettingsComponent,
		UserOverviewComponent,
		ProfileCardComponent,
	],
	imports: [
		CommonModule,
		UserRoutingModule,
		RouterModule,
		FormsModule,
		FontAwesomeModule,
		SharedModule
	],
})
export class UserModule {}
