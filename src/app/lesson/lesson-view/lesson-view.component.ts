import { Component, OnInit } from "@angular/core";
import { Course } from "../../course/course.model";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { LessonService } from "../lesson.service";
import { Lesson } from "../lesson.model";
import { CourseService } from "../../course/course.service";
import { HttpPaginatedResult } from "../../shared/http-paginated-result";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { LessonAttachment } from "src/app/lesson-attachment/lesson-attachment.model";
import { LessonAttachmentService } from "src/app/lesson-attachment/lesson-attachment.service";
import {BadgeService} from "../../shared/badge.service";
import {AuthService} from "../../auth/auth.service";
import {Badge} from "../../shared/badge.model";
import { faGraduationCap, faChevronRight } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: "app-lesson-view",
	templateUrl: "./lesson-view.component.html",
	styleUrls: ["./lesson-view.component.scss"],
})
export class LessonViewComponent implements OnInit {
	icons = { faGraduationCap, faChevronRight };
	lesson: Lesson;
	course: Course;
	badges: Badge[];
	lessons: Lesson[] = [];
	index: number;
	attachments: LessonAttachment[] = [];

	constructor(
		private route: ActivatedRoute,
		private lessonService: LessonService,
		private courseService: CourseService,
		private lessonAttachmentService: LessonAttachmentService,
		private router: Router,
		private sanitizer: DomSanitizer,
		private badgeService: BadgeService,
		private authService: AuthService
	) {}

	ngOnInit(): void {
		this.route.params.subscribe((params: Params) => {
			this.lessonService.get(params.courseId).subscribe((result: HttpPaginatedResult<Lesson>) => {
				this.lessons = result.items;
			});

			this.lessonService
				.getById(params.lessonId)
				.subscribe((lesson: Lesson) => {
					this.lesson = lesson;
					this.getCourseFromId();
					this.getAttachmentsByLessonId();
					this.getBadgesFromCourseId();
				});
		});
	}

	isCompleted(): boolean {
		return this.badges?.find(badge => badge.lesson.id === this.lesson.id) !== undefined;
	}

	getSafeHTML = (): SafeHtml =>
		this.sanitizer.bypassSecurityTrustHtml(this.lesson.content);

	getAttachmentsByLessonId(): void {
		this.lessonAttachmentService
			.get(this.lesson.id)
			.subscribe(
				(responseData: HttpPaginatedResult<LessonAttachment>) => {
					this.attachments = responseData.items;
				}
			);
	}

	getCourseFromId(): void {
		this.courseService
			.getByID(this.lesson.courseId)
			.subscribe((course: Course) => {
				this.course = course;
			});
	}

	getBadgesFromCourseId(): void {
		this.badgeService.getBadgesByUser(this.authService.loginInfo.getValue().user.id, this.lesson.courseId)
			.subscribe((result: HttpPaginatedResult<Badge>) => {
				this.badges = result.items;
			});
	}

}
