import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { LessonViewComponent } from "./lesson-view/lesson-view.component";
import { AdminEditLessonViewComponent } from "./admin-edit-lesson-view/admin-edit-lesson-view.component";
import { TestComponent } from "../test/test/test.component";

const routes: Routes = [
	{
		path: "admin/courses/:courseId/lessons/:lessonId",
		component: AdminEditLessonViewComponent,
		canActivate: [AuthGuard],
	},
	{
		path: "courses/:courseId/lessons/:lessonId",
		component: LessonViewComponent,
		canActivate: [AuthGuard],
	},
	{
		path: "courses/:courseId/lessons/:lessonId/test",
		component: TestComponent,
		canActivate: [AuthGuard],
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LessonRoutingModule {}
