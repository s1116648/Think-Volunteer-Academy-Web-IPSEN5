import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-test-question",
    templateUrl: "./question.component.html",
    styleUrls: ["./question.component.scss"]
})
export class QuestionComponent implements OnInit {

    @Input() question;

    multipleCorrect: boolean;

    constructor() {
    }

    ngOnInit(): void {
        this.initialiseMultipleCorrect();
    }

    initialiseMultipleCorrect = (): boolean => this.multipleCorrect = this.getNumberOfAnswers() > 1;

    getNumberOfAnswers(): number {
        return this.question.answers.filter((answer) => answer.correct).length;
    }
}
