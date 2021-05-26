import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PermissionComponent } from "./permission.component";
import { RouterModule } from "@angular/router";
import { PermissionRoutingModule } from "./permission-routing.module";

@NgModule({
  declarations: [PermissionComponent],
  imports: [
    CommonModule,
    RouterModule,
    PermissionRoutingModule
  ]
})
export class PermissionModule { }
