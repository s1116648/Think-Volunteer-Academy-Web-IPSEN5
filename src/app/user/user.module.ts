import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';



@NgModule({
  declarations: [UserSettingsComponent, ProfileCardComponent],
  exports: [
    UserSettingsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
