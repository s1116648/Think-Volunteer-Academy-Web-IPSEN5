import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CoachOverviewComponent } from "./coach/coach-overview/coach-overview.component";
import { AuthGuard } from "../auth/auth.guard";
import { PermissionGuard } from "../role/permission/permission.guard";

const routes: Routes = [
  {
    path: "admin/manage/coaches",
    component: CoachOverviewComponent,
    canActivate: [AuthGuard, PermissionGuard],
    data: {permissions: ["coach.view", "student.view"]}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachingRoutingModule {}
