import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ManageComponent } from "../manage/manage.component";

const routes: Routes = [
  {
    path: "admin/courses/:id/lessons/:id",
    component: ManageComponent,
  },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LessonRoutingModule {}
