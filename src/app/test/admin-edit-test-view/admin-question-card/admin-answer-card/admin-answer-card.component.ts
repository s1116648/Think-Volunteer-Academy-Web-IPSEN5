import {Component, Input, OnInit} from "@angular/core";
import {faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import {Answer} from "../../../answer.model";

@Component({
  selector: "app-admin-answer-card",
  templateUrl: "./admin-answer-card.component.html",
  styleUrls: ["./admin-answer-card.component.scss"]
})
export class AdminAnswerCardComponent implements OnInit {
  icons = { faPlus, faTrash };
  @Input() answer: Answer;
  constructor() { }

  ngOnInit(): void {
  }

  deleteAnswer(): void {
    console.log("Deleting answer functionality here");
  }
}
