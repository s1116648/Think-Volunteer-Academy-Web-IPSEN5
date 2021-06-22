import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AuthGuard } from "../auth/auth.guard";
import { AdminEditTestViewComponent } from "./admin-edit-test-view/admin-edit-test-view.component";
import { TestScreenComponent } from "./test-screen/test-screen.component";

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
	{
		path: "courses/:courseId/test/:testId",
		component: TestScreenComponent,
		canActivate: [AuthGuard],
	},
	{
		path: "courses/:courseId/lessons/:lessonId/test/:testId",
		component: TestScreenComponent,
		canActivate: [AuthGuard],
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TestRoutingModule {}
