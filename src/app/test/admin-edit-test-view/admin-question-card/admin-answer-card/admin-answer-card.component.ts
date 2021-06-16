import {Component, Input, OnInit} from "@angular/core";
import {faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import {Answer} from "../../../model/answer.model";

@Component({
  selector: "app-admin-answer-card",
  templateUrl: "./admin-answer-card.component.html",
  styleUrls: ["./admin-answer-card.component.scss"]
})
export class AdminAnswerCardComponent implements OnInit {
  icons = { faPlus, faTrash };
  @Input() disabled: boolean;
  @Input() answer: Answer;
  @Input() index: number;
  constructor() { }

  ngOnInit(): void {
  }

  deleteAnswer(): void {
    console.log("Deleting answer functionality here");
  }
}
