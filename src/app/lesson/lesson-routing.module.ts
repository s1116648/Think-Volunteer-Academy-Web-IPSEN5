import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LessonOverviewComponent } from "./lesson-overview/lesson-overview.component";

const routes: Routes = [
	{
		path: "courses/:id",
		component: LessonOverviewComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LessonRoutingModule {}
