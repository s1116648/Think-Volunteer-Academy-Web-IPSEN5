import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LessonOverviewComponent } from "./lesson-overview/lesson-overview.component";
import { LessonOverviewCardComponent } from "./lesson-overview/lesson-overview-card/lesson-overview-card.component";
import {LessonService} from "./lesson.service";
import { ProgressCircleComponent } from "./lesson-overview/progress-circle/progress-circle.component";



@NgModule({
  declarations: [LessonOverviewComponent, LessonOverviewCardComponent, ProgressCircleComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LessonOverviewComponent
  ],
  providers: [
    LessonService
  ]
})
export class LessonModule { }
