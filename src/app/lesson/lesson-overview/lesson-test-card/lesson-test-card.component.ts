import { Component, OnInit } from "@angular/core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: "app-lesson-test-card",
	templateUrl: "./lesson-test-card.component.html",
	styleUrls: ["./lesson-test-card.component.scss"],
})
export class LessonTestCardComponent implements OnInit {
	icons = { faArrowRight };
	constructor() {}

	ngOnInit(): void {}
}
