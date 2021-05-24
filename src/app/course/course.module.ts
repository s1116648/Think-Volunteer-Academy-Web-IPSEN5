import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseRoutingModule } from "./course.routing.module";
import { CreateCourseComponent } from "./create-course/create-course.component";

@NgModule({
	declarations: [CreateCourseComponent],
	imports: [CommonModule, CourseRoutingModule],
})
export class CourseModule {}
