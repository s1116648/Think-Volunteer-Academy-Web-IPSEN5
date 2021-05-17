import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LessonOverviewComponent } from "./lesson-overview/lesson-overview.component";
import { LessonOverviewCardComponent } from "./lesson-overview/lesson-overview-card/lesson-overview-card.component";



@NgModule({
  declarations: [LessonOverviewComponent, LessonOverviewCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LessonOverviewComponent
  ]
})
export class LessonModule { }
