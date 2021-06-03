import { Component, Input, OnInit } from "@angular/core";
import { Course } from "../../course.model";

@Component({
	selector: "app-admin-course-info",
	templateUrl: "./admin-course-info.component.html",
	styleUrls: ["./admin-course-info.component.scss"],
})
export class AdminCourseInfoComponent implements OnInit {
	@Input() course: Course;

	constructor() {}

	ngOnInit(): void {}
}
