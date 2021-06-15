import {Component, Input, OnInit} from "@angular/core";
import {CreateAnswerDTO} from "../../../dto/create-answer.dto";

@Component({
  selector: "app-admin-answer-card-created",
  templateUrl: "./admin-answer-card-created.component.html",
  styleUrls: ["./admin-answer-card-created.component.scss"]
})
export class AdminAnswerCardCreatedComponent implements OnInit {
  @Input() answer: CreateAnswerDTO;
  constructor() { }

  ngOnInit(): void {
  }

}
