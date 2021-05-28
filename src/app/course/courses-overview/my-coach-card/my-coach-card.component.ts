import {Component, Input, OnInit} from "@angular/core";
import { CoachCardModel } from "./coach-card.model";

@Component({
  selector: "app-course-my-coach-card",
  templateUrl: "./my-coach-card.component.html",
  styleUrls: ["my-coach-card.component.scss"]
})
export class MyCoachCardComponent implements OnInit {

  coachCardModel: CoachCardModel;

  constructor() {
    this.coachCardModel = this.generateCoachCardModel();
  }

  ngOnInit(): void {
  }

  generateCoachCardModel(): CoachCardModel {
    const coachCardModel = new CoachCardModel("1", "John Doe", "temp");
    return coachCardModel;
  }
}
