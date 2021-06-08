import { Component, Input, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";
import { Course } from "../../course.model";

@Component({
	selector: "app-recommendation-card",
	templateUrl: "./recommendation-card.component.html",
	styleUrls: ["./recommendation-card.component.scss"],
})
export class RecommendationCardComponent implements OnInit {
	@Input() course: Course;

	get image(): string {
		return environment.S3_ENDPOINT + this.course.image;
	}

	constructor() {}

	ngOnInit(): void {}
}
