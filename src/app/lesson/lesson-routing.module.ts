import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { LessonViewComponent } from "./lesson-view/lesson-view.component";
import {AdminLessonViewComponent} from "./admin-lesson-view/admin-lesson-view.component";

const routes: Routes = [
	{
		path: "admin/courses/:courseId/lessons/:lessonId",
		component: AdminLessonViewComponent,
        canActivate: [AuthGuard],
	},
	{
		path: "courses/:courseId/lessons/:lessonId",
		component: LessonViewComponent,
		canActivate: [AuthGuard],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LessonRoutingModule {}
