import { Component, Input, OnInit } from "@angular/core";
import { Lesson } from "../../../lesson/lesson.model";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { environment } from "src/environments/environment";

@Component({
	selector: "app-course-overview-card",
	templateUrl: "./course-overview-card.component.html",
	styleUrls: ["./course-overview-card.component.scss"],
})
export class CourseOverviewCardComponent implements OnInit {
	@Input() lesson: Lesson;

	@Input() lessonNumber: number;

	@Input() completed: boolean;

	icons = { faArrowRight };

	get image(): string {
		return environment.S3_ENDPOINT + this.lesson.image;
	}

	constructor() {}

	ngOnInit(): void {}
}
