import {Component, Input, OnInit} from "@angular/core";
import {ControlContainer, NgForm} from "@angular/forms";
import {UpdateAnswerDTO} from "../../../dto/update-answer.dto";
import {faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import {AnswerService} from "../../../services/answer.service";

@Component({
  selector: "app-admin-answer-card-created",
  templateUrl: "./admin-answer-card-created.component.html",
  styleUrls: ["./admin-answer-card-created.component.scss"],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class AdminAnswerCardCreatedComponent implements OnInit {
  @Input() newAnswers: UpdateAnswerDTO;
  @Input() index: number;

  icons = { faPlus, faTrash };
  constructor(private answerService: AnswerService) {}

  ngOnInit(): void {}

  deleteAnswer(): void {
    const tempArr = this.answerService.getGlobalAnswersArray()
        .filter(x => x !== this.newAnswers);
    this.answerService.updateGlobalAnswersArray(tempArr);
  }
}
