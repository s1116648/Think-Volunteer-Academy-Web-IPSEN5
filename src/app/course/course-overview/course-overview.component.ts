import { Component, OnInit } from "@angular/core";
import { Lesson } from "../../lesson/lesson.model";
import { CourseService } from "../course.service";

@Component({
	selector: "app-course-overview",
	templateUrl: "./course-overview.component.html",
	styleUrls: ["./course-overview.component.scss"],
})
export class CourseOverviewComponent implements OnInit {
	lessons!: Lesson[];
	constructor(private courseService: CourseService) {}

	ngOnInit(): void {
		this.onFetchLessons();
		this.courseService.lessonsCardsChanged.subscribe((lessons) => {
			this.lessons = lessons;
		});
	}

	onFetchLessons(): void {
		this.courseService.fetchLessonsFromApi().subscribe((resArray) => {
			this.courseService.setLessonsCards(resArray);
		});
	}
}
