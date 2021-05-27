import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage.component';
import { RoleModule } from "../role/role.module";
import { UserModule } from "../user/user.module";
import { ManageRoutingModule } from "./manage-routing.module";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";



@NgModule({
  declarations: [ManageComponent],
  imports: [
    CommonModule,
    RoleModule,
    UserModule,
    ManageRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class ManageModule { }
