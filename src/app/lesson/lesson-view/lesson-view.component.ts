import { Component, OnInit } from "@angular/core";
import { Course } from "../../course/course.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import { LessonService } from "../lesson.service";
import { Lesson } from "../lesson.model";
import { CourseService } from "../../course/course.service";
import {LessonAttachment} from "../../lesson-attachment/lesson-attachment.model";
import {LessonAttachmentService} from "../../lesson-attachment/lesson-attachment.service";
import {HttpPaginatedResult} from "../../shared/http-paginated-result";

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
  private router: Router
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
	getAttachmentsByLessonId(): void {
	  this.lessonAttachmentService
      .get(this.lesson.id)
      .subscribe((responseData: HttpPaginatedResult<LessonAttachment>) => {
        this.attachments = responseData.items;
      });
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
