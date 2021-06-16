import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AuthGuard } from "../auth/auth.guard";
import { AdminEditTestViewComponent } from "./admin-edit-test-view/admin-edit-test-view.component";

const routes: Routes = [
	{
		path: "admin/courses/:courseId/tests/:testId",
		component: AdminEditTestViewComponent,
		canActivate: [AuthGuard],
	},
	{
		path: "admin/courses/:courseId/lessons/:lessonId/tests/:testId",
		component: AdminEditTestViewComponent,
		canActivate: [AuthGuard],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TestRoutingModule {}
