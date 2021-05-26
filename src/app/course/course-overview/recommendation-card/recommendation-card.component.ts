import { Component, Input, OnInit } from "@angular/core";
import { Course } from "../../course.model";

@Component({
	selector: "app-recommendation-card",
	templateUrl: "./recommendation-card.component.html",
	styleUrls: ["./recommendation-card.component.scss"],
})
export class RecommendationCardComponent implements OnInit {
	@Input() course: Course;

	constructor() {}

	ngOnInit(): void {}
}
