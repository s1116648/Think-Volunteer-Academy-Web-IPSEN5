import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CoachOverviewComponent } from "./coach/coach-overview/coach-overview.component";

const routes: Routes = [
  {
    path: "coaching/manage",
    component: CoachOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachingRoutingModule {}
