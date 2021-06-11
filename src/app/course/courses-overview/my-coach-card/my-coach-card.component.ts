import { Component, OnInit } from "@angular/core";
import {
	faArrowRight,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: "app-my-coach-card",
	templateUrl: "./my-coach-card.component.html",
	styleUrls: ["my-coach-card.component.scss"],
})
export class MyCoachCardComponent implements OnInit {
	coachImg: string;
	coachFirstName: string;
	coachLastName: string;

	icons = {
		faArrowRight,
		faChevronRight,
	};

	constructor() {}

	ngOnInit(): void {
		this.initialiseCoach();
	}

	// ToDo if the coach binding works, update this so it would get it from a service.
	initialiseCoach(): void {
		this.coachFirstName = "John";
		this.coachLastName = "Doe";
	}
}
