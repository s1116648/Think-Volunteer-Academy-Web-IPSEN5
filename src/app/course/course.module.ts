import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseRoutingModule } from "./course.routing.module";
import { CreateCourseComponent } from "./create-course/create-course.component";
import { EditCourseComponent } from "./edit-course/edit-course.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
	declarations: [CreateCourseComponent, EditCourseComponent],
	imports: [
		CommonModule,
		CourseRoutingModule,
		FormsModule,
		SharedModule,
		FontAwesomeModule,
	],
})
export class CourseModule {}
