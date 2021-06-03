import { Component, OnInit } from "@angular/core";
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
} from "@fortawesome/free-solid-svg-icons";
import { ActivatedRoute, Params } from "@angular/router";
import { LessonService } from "../lesson.service";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { HttpPaginatedResult } from "src/app/shared/http-paginated-result";
import { LessonAttachmentService } from "src/app/lesson-attachment/lesson-attachment.service";
import { LessonAttachment } from "src/app/lesson-attachment/lesson-acttachment.model";
import { FileService } from "src/app/file/file.service";
import { UploadedFileResponse } from "src/app/file/UploadedFileResponse.model";

@Component({
	selector: "app-admin-lesson-view",
	templateUrl: "./admin-lesson-view.component.html",
	styleUrls: ["./admin-lesson-view.component.scss"],
})
export class AdminLessonViewComponent implements OnInit {
	lesson: Lesson;
	icons = {
		faArrowRight,
		faFileUpload,
		faFileWord,
		faFilePowerpoint,
		faFilePdf,
		faFile,
		faTimes,
	};

	fileIcons = {
		docx: this.icons.faFileWord,
		ppt: this.icons.faFilePowerpoint,
		pdf: this.icons.faFilePdf,
	};

	attachments: LessonAttachment[] = [];
	attachmentsToUpload: File[] = [];
	attachmentsToDelete: LessonAttachment[] = [];

	constructor(
		private route: ActivatedRoute,
		private lessonService: LessonService,
		private lessonAttachmentService: LessonAttachmentService,
		private fileService: FileService
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
		this.createAttachments(this.attachmentsToUpload);
		this.deleteAttachments(this.attachmentsToDelete);
	}

	getFileIcon(name: string): IconProp {
		const splitted = name.split(".");
		const extension = splitted[splitted.length - 1];

		return this.fileIcons[extension] ?? this.icons.faFile;
	}

	deleteAttachments = (attachments: LessonAttachment[]): void =>
		attachments.forEach((attachment) => this.deleteAttachment(attachment));

	deleteAttachment(attachment: LessonAttachment): void {
		this.lessonAttachmentService
			.remove(this.lesson.id, attachment.id)
			.subscribe(() => {
				const index = this.attachmentsToDelete.findIndex(
					(a) => a.id === attachment.id
				);

				this.attachmentsToDelete.splice(index, 1);
			});
	}

	onFileChange(event: Event): void {
		const target = event.target as HTMLInputElement;
		const files = target.files as FileList;
		const file = files[0];

		console.log(file);

		if (file) this.attachmentsToUpload.push(file);
	}

	createAttachments(file: File[]): void {
		this.attachmentsToUpload.forEach((file: File) =>
			this.createAttachment(file)
		);
	}

	createAttachment(file: File): void {
		this.fileService
			.upload(file)
			.subscribe((uploadedFileResponse: UploadedFileResponse) => {
				this.lessonAttachmentService
					.create(this.lesson.id, {
						name: file.name,
						path: uploadedFileResponse.path,
					})
					.subscribe((attachment: LessonAttachment) => {
						const index = this.attachmentsToUpload.findIndex(
							(f) => f == file
						);
						this.attachmentsToUpload.splice(index, 1);
						this.attachments.push(attachment);
					});
			});
	}

	deleteAttachmentFromUploadList(index: number): void {
		this.attachmentsToUpload.splice(index, 1);
	}

	addToAttachmentsToDelete(
		attachment: LessonAttachment,
		index: number
	): void {
		this.attachments.splice(index, 1);
		this.attachmentsToDelete.push(attachment);
	}
}
