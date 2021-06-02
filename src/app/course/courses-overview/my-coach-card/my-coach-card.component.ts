import {Component, OnInit} from "@angular/core";
import { CoachCardModel } from "./coach-card.model";
import { faArrowRight, faChevronRight } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-course-my-coach-card",
  templateUrl: "./my-coach-card.component.html",
  styleUrls: ["my-coach-card.component.scss"]
})
export class MyCoachCardComponent implements OnInit {

    coachCardModel: CoachCardModel;
    icons = {
        faArrowRight,
        faChevronRight
    };

    constructor() {
        this.coachCardModel = this.generateCoachCardModel();
    }

    ngOnInit(): void {
    }

    generateCoachCardModel(): CoachCardModel {
        const coachCardModel = new CoachCardModel("1", "John Doe", "assets/images/avatar-temp.jpg");
        return coachCardModel;
}
}
