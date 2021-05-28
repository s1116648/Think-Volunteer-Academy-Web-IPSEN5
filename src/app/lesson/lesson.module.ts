import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseService } from "../course/course.service";
import { LessonRoutingModule } from "./lesson-routing.module";
import { AdminLessonCardComponent } from "./admin-lesson-card/admin-lesson-card.component";
import { SharedModule } from "../shared/shared.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { DndModule } from "ngx-drag-drop";

@NgModule({
	declarations: [AdminLessonCardComponent],
	imports: [
		CommonModule,
		LessonRoutingModule,
		SharedModule,
		FontAwesomeModule,
		DndModule,
	],
	exports: [AdminLessonCardComponent],
	providers: [CourseService],
})
export class LessonModule {}
