import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateCourseComponent } from "./create-course/create-course.component";

const routes: Routes = [
	{
		path: "courses/new",
		component: CreateCourseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CourseRoutingModule {}
