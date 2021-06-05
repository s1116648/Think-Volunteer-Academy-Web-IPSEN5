import { Component, OnInit, Sanitizer, SecurityContext } from "@angular/core";
import { Course } from "../../course/course.model";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { LessonService } from "../lesson.service";
import { Lesson } from "../lesson.model";
import { CourseService } from "../../course/course.service";
import { HttpPaginatedResult } from "../../shared/http-paginated-result";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { LessonAttachment } from "src/app/lesson-attachment/lesson-attachment.model";
import { LessonAttachmentService } from "src/app/lesson-attachment/lesson-attachment.service";

@Component({
	selector: "app-lesson-view",
	templateUrl: "./lesson-view.component.html",
	styleUrls: ["./lesson-view.component.scss"],
})
export class LessonViewComponent implements OnInit {
	lesson: Lesson;
	course: Course;
	attachments: LessonAttachment[] = [];

	constructor(
		private route: ActivatedRoute,
		private lessonService: LessonService,
		private courseService: CourseService,
		private lessonAttachmentService: LessonAttachmentService,
		private router: Router,
		private sanitizer: DomSanitizer
	) {}

	ngOnInit(): void {
		this.route.params.subscribe((params: Params) => {
			this.lessonService
				.getById(params.lessonId)
				.subscribe((lesson: Lesson) => {
					this.lesson = lesson;
					this.getCourseFromId();
					this.getAttachmentsByLessonId();
				});
		});
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
	openDocument(attachment: LessonAttachment): void {
		this.router.navigateByUrl(`${attachment.path}`);
	}

	getCourseFromId(): void {
		this.courseService
			.getByID(this.lesson.courseId)
			.subscribe((course: Course) => {
				this.course = course;
			});
	}
}
