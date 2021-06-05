import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { AdminCourseOverviewComponent } from "./admin-course-overview/admin-course-overview.component";
import { AdminOverviewComponent } from "./admin-overview/admin-overview.component";
import { CourseOverviewComponent } from "./course-overview/course-overview.component";
import { CreateCourseComponent } from "./create-course/create-course.component";
import { EditCourseComponent } from "./edit-course/edit-course.component";

const routes: Routes = [
	{
		path: "courses/:id",
		component: CourseOverviewComponent,
		canActivate: [AuthGuard],
	},
	{
		path: "admin",
		component: AdminOverviewComponent,
		canActivate: [AuthGuard],
	},
	{
		path: "admin/courses/new",
		component: CreateCourseComponent,
		canActivate: [AuthGuard],
	},
	{
		path: "admin/courses/:id/edit",
		component: EditCourseComponent,
		canActivate: [AuthGuard],
	},
	{
		path: "admin/courses/:id",
		component: AdminCourseOverviewComponent,
		canActivate: [AuthGuard],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CourseRoutingModule {}
