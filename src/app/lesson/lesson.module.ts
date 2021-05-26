import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseService } from "../course/course.service";
import { LessonRoutingModule } from "./lesson-routing.module";

@NgModule({
	declarations: [],
	imports: [CommonModule, LessonRoutingModule],
	exports: [],
	providers: [CourseService],
})
export class LessonModule {}
