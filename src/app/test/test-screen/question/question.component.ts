import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-test-question",
    templateUrl: "./question.component.html",
    styleUrls: ["./question.component.scss"]
})
export class QuestionComponent implements OnInit {

    @Input() question;

    constructor() {
    }

    ngOnInit(): void {
    }
}
