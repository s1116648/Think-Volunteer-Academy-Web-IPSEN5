import { Component, OnInit } from "@angular/core";
import { Lesson } from "../lesson.model";
import { LessonService } from "../lesson.service";

@Component({
	selector: "app-lesson-overview",
	templateUrl: "./lesson-overview.component.html",
	styleUrls: ["./lesson-overview.component.scss"],
})
export class LessonOverviewComponent implements OnInit {
	lessons!: Lesson[];

	constructor(private lessonService: LessonService) {}

	ngOnInit(): void {
		this.lessons = this.lessonService.getLessons();
	}
}
