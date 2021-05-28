import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Course } from "../course.model";
import { CourseService } from "../course.service";
import { faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Lesson } from "src/app/lesson/lesson.model";
import { LessonService } from "src/app/lesson/lesson.service";
import { HttpPaginatedResult } from "src/app/shared/http-paginated-result";

@Component({
	selector: "app-admin-course-overview",
	templateUrl: "./admin-course-overview.component.html",
	styleUrls: ["./admin-course-overview.component.scss"],
})
export class AdminCourseOverviewComponent implements OnInit {
	icons = { faPen, faPlus };

	course: Course;
	lessons: Lesson[];

	get totalLessonLength(): number {
		return 0;
	}

	constructor(
		private courseService: CourseService,
		private lessonService: LessonService,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.route.params.subscribe((params: Params) => {
			this.courseService
				.getByID(params.id)
				.subscribe((course: Course) => {
					this.course = course;
				});

			this.lessonService
				.get(params.id)
				.subscribe((paginated: HttpPaginatedResult<Lesson>) => {
					this.lessons = paginated.items;
				});
		});
	}
}
