import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CoachOverviewComponent } from "./coach/coach-overview/coach-overview.component";
import { MyStudentsComponent } from "./my-students/my-students.component";

const routes: Routes = [
  {
    path: "admin/manage/coaches",
    component: CoachOverviewComponent,
  },
  {
    path: "coach",
    component: MyStudentsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachingRoutingModule {}
