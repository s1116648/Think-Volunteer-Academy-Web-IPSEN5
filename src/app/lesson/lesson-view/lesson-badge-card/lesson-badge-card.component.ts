import { Component, OnInit, Input } from "@angular/core";
import {Badge} from "../../../shared/badge.model";
import {Lesson} from "../../lesson.model";

@Component({
	selector: "app-lesson-badge-card",
	templateUrl: "./lesson-badge-card.component.html",
	styleUrls: ["./lesson-badge-card.component.scss"],
})
export class LessonBadgeCardComponent implements OnInit {
	@Input() lesson: Lesson;
	@Input() badges: Badge[];

	constructor() {}

	ngOnInit(): void {

	}
	lessonIsCompleted(lessonNumber: number): boolean{
		return this.badges.map(badge => badge.lessonNumber).includes(lessonNumber);
	}

}
