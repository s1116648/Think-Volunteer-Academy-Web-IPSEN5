import { Component, Input, OnInit } from "@angular/core";
import { Course } from "src/app/course/course.model";
import { Lesson } from "src/app/lesson/lesson.model";

@Component({
	selector: "app-general-course-info",
	templateUrl: "./general-course-info.component.html",
	styleUrls: ["./general-course-info.component.scss"],
})
export class GeneralCourseInfoComponent implements OnInit {
	@Input() course: Course;
	@Input() lessonCount: number;
	@Input() length: number;

	constructor() {}

	ngOnInit(): void {}
}
