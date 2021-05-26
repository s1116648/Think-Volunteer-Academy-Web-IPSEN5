import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { LessonService } from "src/app/lesson/lesson.service";
import { HttpPaginatedResult } from "src/app/shared/http-paginated-result";
import { Lesson } from "../../lesson/lesson.model";
import { Course } from "../course.model";
import { CourseService } from "../course.service";

@Component({
	selector: "app-course-overview",
	templateUrl: "./course-overview.component.html",
	styleUrls: ["./course-overview.component.scss"],
})
export class CourseOverviewComponent implements OnInit {
	readonly MAX_SIMILAR_COURSES = 10;

	course: Course;
	lessons: Lesson[] = [];
	similarCourses: Course[] = [];

	get totalLessonLength(): number {
		return this.lessons.reduce((acc, lesson) => acc + lesson.length, 0);
	}

	constructor(
		private route: ActivatedRoute,
		private courseService: CourseService,
		private lessonService: LessonService
	) {}

	ngOnInit(): void {
		this.route.params.subscribe((params: Params) => {
			this.courseService
				.getByID(params.id)
				.subscribe((course: Course) => {
					this.course = course;
				});

			this.lessonService.get(params.id).subscribe((result) => {
				this.lessons = result.items;
			});

			this.courseService
				.getSimilar(params.id)
				.subscribe((result: HttpPaginatedResult<Course>) => {
					this.similarCourses = result.items.slice(
						0,
						this.MAX_SIMILAR_COURSES
					);
				});
		});
	}
}
