import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {AuthGuard} from "../auth/auth.guard";
import {LessonViewComponent} from "./lesson-view/lesson-view.component";

const routes: Routes = [
    {
        path: "courses/:id/lesson/:id",
        component: LessonViewComponent,
        canActivate: [AuthGuard],
    },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LessonRoutingModule {}
