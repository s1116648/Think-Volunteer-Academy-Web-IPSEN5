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
import { DragulaModule } from "ng2-dragula";
import { CategoryCardComponent } from "./courses-overview/category-card/category-card.component";
import { CourseCardComponent } from "./courses-overview/course-card/course-card.component";
import { CoursesOverviewComponent } from "./courses-overview/courses-overview.component";
import { UserModule } from "../user/user.module";
import { AdminOverviewComponent } from "./admin-overview/admin-overview.component";
import { RoleModule } from "../role/role.module";

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
		CourseCardComponent,
		CategoryCardComponent,
		AdminCourseInfoComponent,
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
		UserModule,
		RoleModule
	],
    exports: [CourseOverviewComponent, LessonTestCardComponent],
	providers: [CourseService],
})
export class CourseModule {}
