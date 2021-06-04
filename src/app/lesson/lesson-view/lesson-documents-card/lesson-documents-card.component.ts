import {Component, Input, OnInit} from "@angular/core";

@Component({
	selector: "app-lesson-documents-card",
	templateUrl: "./lesson-documents-card.component.html",
	styleUrls: ["./lesson-documents-card.component.scss"],
})
export class LessonDocumentsCardComponent implements OnInit {
  @Input() lessonAttachment;
	constructor() {}

	ngOnInit(): void {}
}
