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
    this.multipleCorrect = true; // ToDo replace with below.
    // this.initialiseMultipleCorrect();
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
    for (let i = 0; i < this.question.answers; i++) {
      if (this.question.answers[i].correct === true) {
        numberOfAnswers++;
      }
    }
    return numberOfAnswers;
  }
}
