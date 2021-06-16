import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { LessonService } from "src/app/lesson/lesson.service";
import { HttpPaginatedResult } from "src/app/shared/http-paginated-result";
import { environment } from "src/environments/environment";
import { Lesson } from "../../lesson/lesson.model";
import { Course } from "../course.model";
import { CourseService } from "../course.service";
import { BadgeService } from "../../shared/badge.service";
import { AuthService } from "../../auth/auth.service";
import { Badge } from "../../shared/badge.model";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: "app-course-overview",
	templateUrl: "./course-overview.component.html",
	styleUrls: ["./course-overview.component.scss"],
})
export class CourseOverviewComponent implements OnInit {
	readonly MAX_SIMILAR_COURSES = 10;

	course: Course;
	lessons: Lesson[] = [];
	userBadges: Badge[] = [];
	similarCourses: Course[] = [];

	icons = {
		faGraduationCap
	};

	get totalLessonLength(): number {
		return this.lessons.reduce((acc, lesson) => acc + lesson.length, 0);
	}

	get image(): string {
		return environment.S3_ENDPOINT + this.course.image;
	}

	constructor(
		private route: ActivatedRoute,
		private courseService: CourseService,
		private lessonService: LessonService,
		private badgeService: BadgeService,
		private authService: AuthService
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
			this.badgeService
				.getBadgesByUser(
					this.authService.loginInfo.getValue().user.id,
					params.id
				)
				.subscribe((result: HttpPaginatedResult<Badge>) => {
					this.userBadges = result.items;
				});
		});
	}

	lessonIsCompleted(index: number): boolean {
		const lesson = this.lessons[index];
		return this.userBadges
			.map((badge) => badge.lesson.id)
			.includes(lesson.id);
	}
}
