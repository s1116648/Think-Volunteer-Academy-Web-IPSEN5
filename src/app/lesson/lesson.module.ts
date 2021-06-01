import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseService } from "../course/course.service";
import { LessonRoutingModule } from "./lesson-routing.module";
import { SetLessonModalComponent } from "./modals/set-lesson-modal/set-lesson-modal.component";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AdminLessonCardComponent } from "./admin-lesson-card/admin-lesson-card.component";

@NgModule({
	declarations: [SetLessonModalComponent, AdminLessonCardComponent],
	imports: [
		CommonModule,
		LessonRoutingModule,
		SharedModule,
		FormsModule,
		FontAwesomeModule,
	],
	exports: [AdminLessonCardComponent],
	providers: [CourseService],
})
export class LessonModule {}
