import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseRoutingModule } from "./course.routing.module";
import { CourseOverviewComponent } from "./course-overview/course-overview.component";
import { CourseOverviewCardComponent } from "./course-overview/course-overview-card/course-overview-card.component";
import { RecommendationCardComponent } from "./course-overview/recommendation-card/recommendation-card.component";
import { LessonTestCardComponent } from "./course-overview/lesson-test-card/lesson-test-card.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CourseService } from "./course.service";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { EditCourseComponent } from "./edit-course/edit-course.component";
import { CreateCourseComponent } from "./create-course/create-course.component";
import { AdminCourseOverviewComponent } from "./admin-course-overview/admin-course-overview.component";
import { LessonModule } from "../lesson/lesson.module";
import { AdminCourseInfoComponent } from "./admin-course-overview/admin-course-info/admin-course-info.component";
import { MyCoursesComponent } from "./courses-overview/my-courses/my-courses.component";
import { AdminOverviewComponent } from "./admin-overview/admin-overview.component";
import { DragulaModule } from "ng2-dragula";
import { CategoryCardComponent } from "./courses-overview/category-card/category-card.component";
import { MyCoachCardComponent } from "./courses-overview/my-coach-card/my-coach-card.component";
import { MyProfileCardComponent } from "./courses-overview/my-profile-card/my-profile-card.component";
import { CourseCardComponent } from "./courses-overview/course-card/course-card.component";
import { CoursesOverviewComponent } from "./courses-overview/courses-overview.component";

@NgModule({
	declarations: [
		CourseOverviewComponent,
		CourseOverviewCardComponent,
		RecommendationCardComponent,
		LessonTestCardComponent,
		EditCourseComponent,
		CreateCourseComponent,
		AdminCourseOverviewComponent,
        CoursesOverviewComponent,
        MyCoachCardComponent,
        MyProfileCardComponent,
        CourseCardComponent,
        CategoryCardComponent,
		AdminCourseInfoComponent,
		MyCoursesComponent,
		AdminOverviewComponent,
	],
	imports: [
		CommonModule,
		FontAwesomeModule,
		CourseRoutingModule,
		SharedModule,
		FormsModule,
		LessonModule,
		DragulaModule,
	],
	exports: [CourseOverviewComponent],
	providers: [CourseService],
})
export class CourseModule {}
