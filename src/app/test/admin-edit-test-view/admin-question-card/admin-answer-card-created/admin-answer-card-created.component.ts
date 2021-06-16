import {Component, Input, OnInit} from "@angular/core";
import {ControlContainer, NgForm} from "@angular/forms";
import {UpdateAnswerDTO} from "../../../dto/update-answer.dto";

@Component({
  selector: "app-admin-answer-card-created",
  templateUrl: "./admin-answer-card-created.component.html",
  styleUrls: ["./admin-answer-card-created.component.scss"],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class AdminAnswerCardCreatedComponent implements OnInit {
  @Input() newAnswers: UpdateAnswerDTO;
  @Input() index: number;

  constructor() {}

  ngOnInit(): void {

  }

}
