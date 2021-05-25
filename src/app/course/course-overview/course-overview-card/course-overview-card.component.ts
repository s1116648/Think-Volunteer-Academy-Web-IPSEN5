import { Component, Input, OnInit } from "@angular/core";
import { Lesson } from "../../../lesson/lesson.model";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: "app-course-overview-card",
	templateUrl: "./course-overview-card.component.html",
	styleUrls: ["./course-overview-card.component.scss"],
})
export class CourseOverviewCardComponent implements OnInit {
	@Input() lesson: Lesson;
	lessonNumber: string;
	icons = { faArrowRight };
	constructor() {}

	ngOnInit(): void {
		this.convertLessonId(this.lesson.lessonNumber);
	}

	convertLessonId(lessonId): void {
		if (lessonId <= 9) {
			this.lessonNumber = `0${lessonId}`;
		} else if (lessonId >= 10) {
			this.lessonNumber = lessonId;
		}
	}
}
