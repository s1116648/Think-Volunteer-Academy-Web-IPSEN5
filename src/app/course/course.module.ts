import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseRoutingModule } from "./course.routing.module";
import { CourseOverviewComponent } from "./course-overview/course-overview.component";
import { CourseOverviewCardComponent } from "./course-overview/course-overview-card/course-overview-card.component";
import { ProgressCircleComponent } from "./course-overview/progress-circle/progress-circle.component";
import { RecommendationCardComponent } from "./course-overview/recommendation-card/recommendation-card.component";
import { LessonTestCardComponent } from "./course-overview/lesson-test-card/lesson-test-card.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CourseService } from "./course.service";

@NgModule({
	declarations: [
		CourseOverviewComponent,
		CourseOverviewCardComponent,
		ProgressCircleComponent,
		RecommendationCardComponent,
		LessonTestCardComponent,
	],
	imports: [CommonModule, FontAwesomeModule, CourseRoutingModule],
	exports: [CourseOverviewComponent],
	providers: [CourseService],
})
export class CourseModule {}
