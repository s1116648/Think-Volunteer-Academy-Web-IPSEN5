import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ManageComponent } from "./manage.component";
import { AuthGuard } from "../auth/auth.guard";

const routes: Routes = [
	{
		path: "admin/manage",
		component: ManageComponent,
		canActivate: [AuthGuard]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ManageRoutingModule {}
