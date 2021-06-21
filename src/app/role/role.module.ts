import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RoleComponent } from "./role.component";
import { RoleRowComponent } from "./role-row/role-row.component";
import { RouterModule } from "@angular/router";
import { SetRoleModalComponent } from "./modals/set-role-modal/set-role-modal.component";
import { SharedModule } from "../shared/shared.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FormsModule } from "@angular/forms";
import { HasPermissionsDirective } from "./permission/has-permissions.directive";

@NgModule({
	declarations: [RoleComponent, RoleRowComponent, SetRoleModalComponent, HasPermissionsDirective],
	imports: [CommonModule, RouterModule, SharedModule, FontAwesomeModule, FormsModule],
	exports: [RoleComponent, HasPermissionsDirective]
})
export class RoleModule {}
