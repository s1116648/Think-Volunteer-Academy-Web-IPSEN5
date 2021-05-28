import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseService } from "../course/course.service";
import { LessonRoutingModule } from "./lesson-routing.module";
import { LessonViewComponent } from "./lesson-view/lesson-view.component";

@NgModule({
	declarations: [LessonViewComponent],
	imports: [CommonModule, LessonRoutingModule],
    exports: [
        LessonViewComponent
    ],
	providers: [CourseService],
})
export class LessonModule {}
