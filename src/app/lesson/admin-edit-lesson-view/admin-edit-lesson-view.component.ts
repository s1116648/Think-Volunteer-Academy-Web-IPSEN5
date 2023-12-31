import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Lesson } from "../lesson.model";
import {
	faArrowRight,
	faFileUpload,
	faFileWord,
	faFilePowerpoint,
	faFilePdf,
	faFile,
	faTimes,
	faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { LessonService } from "../lesson.service";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { HttpPaginatedResult } from "src/app/shared/http-paginated-result";
import { LessonAttachmentService } from "src/app/lesson-attachment/lesson-attachment.service";
import { LessonAttachment } from "src/app/lesson-attachment/lesson-attachment.model";
import { FileService } from "src/app/file/file.service";
import { UploadedFileResponse } from "src/app/file/UploadedFileResponse.model";
import { UpdateLessonDTO } from "../dto/update-lesson.dto";
import { forkJoin, Observable } from "rxjs";
import { defaultIfEmpty, tap } from "rxjs/operators";
import { NotifierService } from "angular-notifier";
import { HttpErrorResponse } from "@angular/common/http";
import { PlaceholderDirective } from "../../shared/placeholder.directive";
import { ModalService } from "../../shared/modal.service";
import { ConfirmModalComponent } from "../../shared/modals/confirm-modal/confirm-modal.component";

@Component({
	selector: "app-admin-edit-lesson-view",
	templateUrl: "./admin-edit-lesson-view.component.html",
	styleUrls: ["./admin-edit-lesson-view.component.scss"],
})
export class AdminEditLessonViewComponent implements OnInit {
	lesson: Lesson;

	icons = {
		faArrowRight,
		faFileUpload,
		faFileWord,
		faFilePowerpoint,
		faFilePdf,
		faFile,
		faTimes,
		faTrash,
	};

	fileIcons = {
		docx: this.icons.faFileWord,
		ppt: this.icons.faFilePowerpoint,
		pdf: this.icons.faFilePdf,
	};

	attachments: LessonAttachment[] = [];
	attachmentsToUpload: File[] = [];
	attachmentsToDelete: LessonAttachment[] = [];

	isUpdating = false;

	@ViewChild(PlaceholderDirective, { static: false })
	private modalHost: PlaceholderDirective;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private lessonService: LessonService,
		private lessonAttachmentService: LessonAttachmentService,
		private fileService: FileService,
		private notifierService: NotifierService,
		private modalService: ModalService
	) {}

	ngOnInit(): void {
		this.route.params.subscribe((params: Params) => {
			this.lessonService
				.getById(params.lessonId)
				.subscribe((lesson: Lesson) => {
					this.lesson = lesson;
				});

			this.getAttachments(params.lessonId);
		});
	}

	getAttachments(lessonID: string): void {
		this.lessonAttachmentService
			.get(lessonID)
			.subscribe((result: HttpPaginatedResult<LessonAttachment>) => {
				this.attachments = result.items;
			});
	}

	update(lessonForm: NgForm): void {
		const values = lessonForm.value;

		const updateDto: UpdateLessonDTO = {
			name: values.name,
			content: values.content,
			description: values.description,
			image: values.image,
			length: values.length,
		};

		const createAttachmentsObservable = this.createAttachments(
			this.attachmentsToUpload
		);
		const deleteAttachmentsObservable = this.deleteAttachments(
			this.attachmentsToDelete
		);
		const dataUpdateObservable = this.lessonService.update(
			this.lesson.id,
			updateDto
		);

		const update = forkJoin([
			createAttachmentsObservable,
			deleteAttachmentsObservable,
			dataUpdateObservable,
		]);

		this.isUpdating = true;

		update.subscribe(() => {
			this.isUpdating = false;
			this.notifierService.notify("success", "Lesson updated.");
			this.router
				.navigate(["../.."], { relativeTo: this.route })
				.catch((err) => console.log(err));
		}, (e: HttpErrorResponse) => {
			this.notifierService.notify("error", "An error occurred while updating lesson.");
		});
	}

	getFileIcon(name: string): IconProp {
		const splitted = name.split(".");
		const extension = splitted[splitted.length - 1];

		return this.fileIcons[extension] ?? this.icons.faFile;
	}

	deleteAttachments(attachments: LessonAttachment[]): Observable<any[]> {
		const observables: Observable<null>[] = [];
		attachments.forEach((attachment) => {
			const observable = this.lessonAttachmentService
				.remove(this.lesson.id, attachment.id)
				.pipe(
					tap(() => {
						const index = this.attachmentsToDelete.findIndex(
							(a) => a.id === attachment.id
						);

						this.attachmentsToDelete.splice(index, 1);
					})
				);

			observables.push(observable);
		});

		return forkJoin(observables).pipe(defaultIfEmpty([]));
	}

	onFileChange(event: Event): void {
		const target = event.target as HTMLInputElement;
		const files = target.files as FileList;
		const file = files[0];

		if (file) this.attachmentsToUpload.push(file);
	}

	createAttachments(files: File[]): Observable<UploadedFileResponse[]> {
		const observables: Observable<UploadedFileResponse>[] = [];

		files.forEach((file: File) => {
			const observable = this.fileService.upload(file).pipe(
				tap((uploadedFileResponse: UploadedFileResponse) => {
					this.lessonAttachmentService
						.create(this.lesson.id, {
							name: file.name,
							path: uploadedFileResponse.path,
						})
						.subscribe((attachment: LessonAttachment) => {
							const index = this.attachmentsToUpload.findIndex(
								(f) => f === file
							);
							this.attachmentsToUpload.splice(index, 1);
							this.attachments.push(attachment);
						});
				})
			);

			observables.push(observable);
		});

		return forkJoin(observables).pipe(defaultIfEmpty([]));
	}

	deleteAttachmentFromUploadList = (index: number) =>
		this.attachmentsToUpload.splice(index, 1);

	addToAttachmentsToDelete(
		attachment: LessonAttachment,
		index: number
	): void {
		this.attachments.splice(index, 1);
		this.attachmentsToDelete.push(attachment);
	}

	remove(): void {
		const modal = this.modalService.createModal(ConfirmModalComponent, this.modalHost);
		modal.instance.description = `Are you sure you want to delete '${this.lesson.name}'? This cannot be undone.`;
		modal.instance.confirmed.subscribe(() =>
			this.lessonService.delete(this.lesson.id).subscribe(() =>
				this.router.navigate(["../.."], { relativeTo: this.route }))
		);
	}
}
