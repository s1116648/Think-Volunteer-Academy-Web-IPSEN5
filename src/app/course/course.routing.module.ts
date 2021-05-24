import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminCourseOverviewComponent } from "./admin-course-overview/admin-course-overview.component";
import { CreateCourseComponent } from "./create-course/create-course.component";
import { EditCourseComponent } from "./edit-course/edit-course.component";

const routes: Routes = [
	{
		path: "courses/new",
		component: CreateCourseComponent,
	},
	{
		path: "admin/courses/:id/edit",
		component: EditCourseComponent,
	},
	{
		path: "admin/courses/:id",
		component: AdminCourseOverviewComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CourseRoutingModule {}
