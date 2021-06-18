import { Component, Input, OnInit } from "@angular/core";

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

  initialiseMultipleCorrect = (): boolean => this.multipleCorrect = this.getNumberOfAnswers() > 1;

  getNumberOfAnswers(): number {
    let numberOfAnswers = 0;
    for (let i = 0; i < this.question.answers.length; i++) {
      if (this.question.answers[i].correct === true) {
        numberOfAnswers++;
      } else {
      }
    }
    return numberOfAnswers;
  }
}
