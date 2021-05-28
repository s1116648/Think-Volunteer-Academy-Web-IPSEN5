import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RoleComponent } from "./role.component";
import { RoleRowComponent } from "./role-row/role-row.component";
import { RouterModule } from "@angular/router";
import { SetRoleModalComponent } from "./modals/set-role-modal/set-role-modal.component";
import { SharedModule } from "../shared/shared.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
	declarations: [RoleComponent, RoleRowComponent, SetRoleModalComponent],
	imports: [CommonModule, RouterModule, SharedModule, FontAwesomeModule],
	exports: [RoleComponent],
})
export class RoleModule {}
