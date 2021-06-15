import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CoachOverviewComponent } from "./coach/coach-overview/coach-overview.component";
import { AuthGuard } from "../auth/auth.guard";
import { PermissionGuard } from "../role/permission/permission.guard";
import { MyStudentsComponent } from "./my-students/my-students.component";

const routes: Routes = [
  {
    path: "admin/manage/coaches",
    component: CoachOverviewComponent,
    canActivate: [AuthGuard, PermissionGuard],
    data: {permissions: ["coach.view", "student.view"]}
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
