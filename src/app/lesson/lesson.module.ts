import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LessonOverviewComponent } from "./lesson-overview/lesson-overview.component";
import { LessonOverviewCardComponent } from "./lesson-overview/lesson-overview-card/lesson-overview-card.component";
import {LessonService} from "./lesson.service";
import { ProgressCircleComponent } from "./lesson-overview/progress-circle/progress-circle.component";
import { RecommendationCardComponent } from "./lesson-overview/recommendation-card/recommendation-card.component";
import { LessonTestCardComponent } from "./lesson-overview/lesson-test-card/lesson-test-card.component";



@NgModule({
  declarations: [LessonOverviewComponent, LessonOverviewCardComponent, ProgressCircleComponent,
    RecommendationCardComponent, LessonTestCardComponent],
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
