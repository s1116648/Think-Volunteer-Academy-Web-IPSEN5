import { Component, Input, OnInit } from "@angular/core";
import { Lesson } from "../lesson.model";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGripHorizontal } from "@fortawesome/free-solid-svg-icons";
import { environment } from "src/environments/environment";

@Component({
	selector: "app-admin-lesson-card",
	templateUrl: "./admin-lesson-card.component.html",
	styleUrls: ["./admin-lesson-card.component.scss"],
})
export class AdminLessonCardComponent implements OnInit {
	@Input() lesson: Lesson;
	@Input() number: number;

	icons = { faArrowRight, faGripHorizontal };

	get image(): string {
		return environment.S3_ENDPOINT + this.lesson.image;
	}

	constructor() {}

	ngOnInit(): void {}
}
