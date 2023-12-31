import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Lesson } from "../../lesson.model";
import { LessonService } from "../../lesson.service";
import { NgForm } from "@angular/forms";
import { CreateLessonDTO } from "../../dto/create-lesson.dto";
import { Course } from "../../../course/course.model";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { NotifierService } from "angular-notifier";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
	selector: "app-set-lesson-modal",
	templateUrl: "./set-lesson-modal.component.html",
	styleUrls: ["./set-lesson-modal.component.scss"],
})
export class SetLessonModalComponent implements OnInit {
	@Output() closeModal = new EventEmitter();
	@Output() set = new EventEmitter<Lesson>();

	@Input() course: Course;

	icons = { faCheck };

	constructor(private lessonService: LessonService, private notifierService: NotifierService) {}

	ngOnInit(): void {}

	create(form: NgForm): void {
		const values = form.value;

		const dto: CreateLessonDTO = {
			name: values.name,
			content: "Content will show up here.",
			description: values.description,
			image: values.image,
			length: 0,
			courseId: this.course.id,
		};

		this.lessonService
			.create(this.course.id, dto)
			.subscribe((lesson: Lesson) => {
				this.set.emit(lesson);
				this.notifierService.notify("success", "Lesson created.");
			}, (e: HttpErrorResponse) => {
				this.notifierService.notify("error", "An error occured while creating lesson.");
			});
	}

	close = (): void => this.closeModal.emit();
}
