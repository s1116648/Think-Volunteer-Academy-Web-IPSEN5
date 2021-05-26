import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UserSettingsComponent} from "./user-settings/user-settings.component";
import {ProfileCardComponent} from "./profile-card/profile-card.component";
import {UserRoutingModule} from "./user-routing.module";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [UserSettingsComponent, ProfileCardComponent],
    exports: [
        UserSettingsComponent
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
