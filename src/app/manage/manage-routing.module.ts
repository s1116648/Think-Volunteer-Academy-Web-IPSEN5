import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ManageComponent } from "./manage.component";
import { AuthGuard } from "../auth/auth.guard";
import { PermissionGuard } from "../role/permission/permission.guard";

const routes: Routes = [
	{
		path: "admin/manage",
		component: ManageComponent,
		canActivate: [AuthGuard, PermissionGuard],
		data: {permissions: []}
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ManageRoutingModule {}
