import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Course } from "../course.model";
import { CourseService } from "../course.service";
import { faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Lesson } from "src/app/lesson/lesson.model";
import { LessonService } from "src/app/lesson/lesson.service";
import { HttpPaginatedResult } from "src/app/shared/http-paginated-result";
import { DndDropEvent } from "ngx-drag-drop";
import { MaxLengthValidator } from "@angular/forms";
import { not } from "@angular/compiler/src/output/output_ast";
import { catchError } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
	selector: "app-admin-course-overview",
	templateUrl: "./admin-course-overview.component.html",
	styleUrls: ["./admin-course-overview.component.scss"],
})
export class AdminCourseOverviewComponent implements OnInit {
	icons = { faPen, faPlus };

	course: Course;
	lessons: Lesson[] = [];

	get totalLessonLength(): number {
		return this.lessons.reduce((acc, val) => acc + val.length, 0);
	}

	get lessonsInOrder(): Lesson[] {
		return this.lessons.sort((a, b) => a.index - b.index);
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

	onDrop(event: DndDropEvent): void {
		const previousState = JSON.parse(JSON.stringify(this.lessons));

		const draggedLesson: Lesson = this.lessons.find(
			(l) => l.id === event.data.id
		);
		const notDraggedLesson: Lesson = this.lessons[event.index];

		if (!draggedLesson || !notDraggedLesson) return;
		if (draggedLesson.index === notDraggedLesson.index) return;

		this.updateLessonOrder(draggedLesson, event.index, previousState);
		this.updateLessonOrderUI(draggedLesson, notDraggedLesson);
	}

	updateLessonOrderUI(draggedLesson: Lesson, notDraggedLesson: Lesson): void {
		const draggedLessonNewIndex = notDraggedLesson.index;

		const factor = draggedLessonNewIndex < draggedLesson.index ? 1 : -1;

		this.lessons
			.filter((lesson) => {
				const lessonIndex = lesson.index * factor;
				return (
					lessonIndex >= notDraggedLesson.index * factor &&
					lessonIndex < draggedLesson.index * factor
				);
			})
			.forEach((lesson) => (lesson.index += factor));

		draggedLesson.index = draggedLessonNewIndex;
	}

	updateLessonOrder(
		draggedLesson: Lesson,
		newIndex: number,
		previousState: Lesson[]
	): void {
		this.lessonService.swap(draggedLesson, newIndex).subscribe(
			(lessons: Lesson[]) => {
				if (this.lessons.length !== lessons.length) {
					returnToPreviousState();
					return;
				}

				for (let i = 0; i < lessons.length; i++) {
					if (this.lessons[i].id !== lessons[i].id) {
						returnToPreviousState();
						return;
					}
				}
			},
			() => returnToPreviousState()
		);

		const returnToPreviousState = () => (this.lessons = previousState);
	}
}
