import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserOverviewComponent } from "./user-overview/user-overview.component";
import { UserRowComponent } from "./user-row/user-row.component";
import {UserSettingsComponent} from "./user-settings/user-settings.component";
import {ProfileCardComponent} from "./profile-card/profile-card.component";
import {UserRoutingModule} from "./user-routing.module";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [UserSettingsComponent, ProfileCardComponent, UserOverviewComponent, UserRowComponent],
    exports: [
        UserSettingsComponent,
        UserOverviewComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        RouterModule,
        FormsModule
    ]
})
export class UserModule {
}
