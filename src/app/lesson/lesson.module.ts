import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LessonOverviewComponent } from "./lesson-overview/lesson-overview.component";



@NgModule({
  declarations: [LessonOverviewComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LessonOverviewComponent
  ]
})
export class LessonModule { }
