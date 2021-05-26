import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { PermissionComponent } from "./permission/permission.component";
import { RoleComponent } from "./role.component";

const routes: Routes = [
  {
    path: "roles",
    component: RoleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoleRoutingModule { }
