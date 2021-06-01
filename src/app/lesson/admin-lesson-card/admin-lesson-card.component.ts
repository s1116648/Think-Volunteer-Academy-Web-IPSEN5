import { Component, Input, OnInit } from "@angular/core";
import { Lesson } from "../lesson.model";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: "app-admin-lesson-card",
	templateUrl: "./admin-lesson-card.component.html",
	styleUrls: ["./admin-lesson-card.component.scss"],
})
export class AdminLessonCardComponent implements OnInit {
	@Input() lesson: Lesson;
	@Input() number: number;

	icons = { faArrowRight };

	constructor() {}

	ngOnInit(): void {}
}
