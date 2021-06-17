import { Component, Input, OnInit } from "@angular/core";
import { Answer } from "../../model/answer.model";

@Component({
  selector: "app-test-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.scss"]
})
export class QuestionComponent implements OnInit {

  @Input() question;

  multipleCorrect: boolean;

  constructor() { }

  ngOnInit(): void {
    this.initialiseMultipleCorrect();
  }

  initialiseMultipleCorrect(): void {
    if (this.getNumberOfAnswers() > 1) {
      this.multipleCorrect = true;
    } else {
      this.multipleCorrect = false;
    }
  }

  getNumberOfAnswers(): number {
    let numberOfAnswers = 0;
    const answers: Answer[] = this.question.answers;
    for (let i = 0; i < this.question.answers.length; i++) {
      if (this.question.answers[i].correct === true) {
        numberOfAnswers++;
      } else {
      }
    }
    return numberOfAnswers;
  }
}
