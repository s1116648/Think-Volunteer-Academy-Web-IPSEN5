import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CourseOverviewComponent } from "../course/course-overview/course-overview.component";

const routes: Routes = [
	{
		path: "courses/:id",
		component: CourseOverviewComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LessonRoutingModule {}
