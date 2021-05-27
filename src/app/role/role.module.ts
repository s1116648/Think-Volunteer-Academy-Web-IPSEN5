import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RoleComponent } from "./role.component";
import { RoleRowComponent } from "./role-row/role-row.component";
import { RouterModule } from "@angular/router";
import { RoleRoutingModule } from "./role-routing.module";
import { SetRoleModalComponent } from "./modals/set-role-modal/set-role-modal.component";
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [RoleComponent, RoleRowComponent, SetRoleModalComponent],
  imports: [
    CommonModule,
    RouterModule,
    RoleRoutingModule,
    SharedModule
  ],
  exports: [
    RoleComponent
  ]
})
export class RoleModule { }
