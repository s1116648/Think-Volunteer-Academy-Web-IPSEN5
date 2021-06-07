import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LessonAttachment } from "../../../lesson-attachment/lesson-attachment.model";
import { LessonAttachmentService } from "../../../lesson-attachment/lesson-attachment.service";

@Component({
	selector: "app-lesson-documents-card",
	templateUrl: "./lesson-documents-card.component.html",
	styleUrls: ["./lesson-documents-card.component.scss"],
})
export class LessonDocumentsCardComponent implements OnInit {
	@Input() lessonAttachments;
	constructor(
		private router: Router,
		private lessonAttachmentService: LessonAttachmentService
	) {}

	ngOnInit(): void {}

	navigateToDoc(lessonAttachment: LessonAttachment): void {
		this.lessonAttachmentService
			.getAttachmentUrl(lessonAttachment.id)
			.subscribe((res) => {
				window.open(res);
			});
	}
}
