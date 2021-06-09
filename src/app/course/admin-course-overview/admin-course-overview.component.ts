import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Course } from "../course.model";
import { CourseService } from "../course.service";
import { faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import { ModalService } from "../../shared/modal.service";
import { PlaceholderDirective } from "../../shared/placeholder.directive";
import { SetLessonModalComponent } from "../../lesson/modals/set-lesson-modal/set-lesson-modal.component";
import { Lesson } from "../../lesson/lesson.model";
import { LessonService } from "src/app/lesson/lesson.service";
import { HttpPaginatedResult } from "src/app/shared/http-paginated-result";
import { environment } from "src/environments/environment";
import { DragulaService } from "ng2-dragula";
import { Subscription } from "rxjs";

@Component({
	selector: "app-admin-course-overview",
	templateUrl: "./admin-course-overview.component.html",
	styleUrls: ["./admin-course-overview.component.scss"],
})
export class AdminCourseOverviewComponent implements OnInit, OnDestroy {
	private onDropModelSubscription: Subscription;
	readonly dragulaLessonGroupName = "lessons";

	@ViewChild(PlaceholderDirective, { static: false })
	modalHost: PlaceholderDirective;

	icons = { faPen, faPlus };

	course: Course;
	lessons: Lesson[] = [];

	get totalLessonLength(): number {
		return this.lessons.reduce((acc, val) => acc + val.length, 0);
	}

	get lessonsInOrder(): Lesson[] {
		return this.lessons.sort((a, b) => a.index - b.index);
	}

	get image(): string {
		return environment.S3_ENDPOINT + this.course.image;
	}

	constructor(
		private courseService: CourseService,
		private route: ActivatedRoute,
		private modalService: ModalService,
		private router: Router,
		private lessonService: LessonService,
		private dragulaService: DragulaService
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

		if (!this.dragulaService.find(this.dragulaLessonGroupName)) {
			this.dragulaService.createGroup(this.dragulaLessonGroupName, {
				moves: (el, source, handle, subling) => {
					return handle.classList.contains("handle");
				},
			});
		}

		this.onDropModelSubscription = this.dragulaService
			.dropModel(this.dragulaLessonGroupName)
			.subscribe((event) => this.onDrop(event));
	}

	ngOnDestroy(): void {
		this.onDropModelSubscription.unsubscribe();
	}

	openNewLessonModal(): void {
		const modal = this.modalService.createModal(
			SetLessonModalComponent,
			this.modalHost
		);
		modal.instance.course = this.course;
		modal.instance.set.subscribe((lesson: Lesson) => {
			this.router.navigate(["lessons", lesson.id], {
				relativeTo: this.route,
			});
		});
	}

	onDrop(event: { targetIndex: number; sourceIndex: number }): void {
		const previousState = JSON.parse(JSON.stringify(this.lessons));

		const draggedLesson: Lesson = this.lessons.find(
			(l) => l.id === this.lessons[event.sourceIndex].id
		);
		const notDraggedLesson: Lesson = this.lessons[event.targetIndex];

		if (!draggedLesson || !notDraggedLesson) return;
		if (draggedLesson.index === notDraggedLesson.index) return;

		this.updateLessonOrder(draggedLesson, event.targetIndex, previousState);
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
					this.lessons = lessons;
					return;
				}

				for (let i = 0; i < lessons.length; i++) {
					if (this.lessons[i].id !== lessons[i].id) {
						this.lessons = lessons;
						return;
					}
				}
			},
			() => returnToPreviousState()
		);

		const returnToPreviousState = () => (this.lessons = previousState);
	}
}
