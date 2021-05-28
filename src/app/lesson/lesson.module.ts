import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseService } from "../course/course.service";
import { LessonRoutingModule } from "./lesson-routing.module";
import { SetLessonModalComponent } from "./modals/set-lesson-modal/set-lesson-modal.component";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
	declarations: [SetLessonModalComponent],
  imports: [CommonModule, LessonRoutingModule, SharedModule, FormsModule, FontAwesomeModule],
	exports: [],
	providers: [CourseService],
})
export class LessonModule {}
