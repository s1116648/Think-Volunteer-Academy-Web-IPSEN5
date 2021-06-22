import { Component, Input, OnInit } from "@angular/core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Course } from "../../course.model";

@Component({
	selector: "app-lesson-test-card",
	templateUrl: "./lesson-test-card.component.html",
	styleUrls: ["./lesson-test-card.component.scss"],
})
export class LessonTestCardComponent implements OnInit {
	@Input() completed: boolean;
	@Input() course: Course;
	icons = { faArrowRight };
	constructor() {}

	ngOnInit(): void {}
}
