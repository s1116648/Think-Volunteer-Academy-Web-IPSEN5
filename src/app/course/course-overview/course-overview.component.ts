import { Component, OnInit } from "@angular/core";
import { LessonService } from "src/app/lesson/lesson.service";
import { Lesson } from "../../lesson/lesson.model";
import { Course } from "../course.model";
import { CourseService } from "../course.service";

@Component({
	selector: "app-course-overview",
	templateUrl: "./course-overview.component.html",
	styleUrls: ["./course-overview.component.scss"],
})
export class CourseOverviewComponent implements OnInit {
	course: Course;
	lessons: Lesson[];

	get totalLessonLength(): number {
		return this.lessons.reduce((acc, lesson) => acc + lesson.length, 0);
	}

	constructor(
		private courseService: CourseService,
		private lessonService: LessonService
	) {}

	ngOnInit(): void {
		this.courseService
			.getByID("8d173fc1-3676-4d91-a612-591978995019")
			.subscribe((course: Course) => {
				this.course = course;
			});

		this.lessonService
			.get("8d173fc1-3676-4d91-a612-591978995019")
			.subscribe((result) => {
				this.lessons = result.items;
			});
	}
}
