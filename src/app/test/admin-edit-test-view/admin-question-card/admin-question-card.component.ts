import { Component, OnInit } from "@angular/core";
import {NgForm} from "@angular/forms";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: "app-admin-question-card",
  templateUrl: "./admin-question-card.component.html",
  styleUrls: ["./admin-question-card.component.scss"]
})
export class AdminQuestionCardComponent implements OnInit {
  icons = { faPlus };
  constructor() { }

  ngOnInit(): void {
  }

  update(testForm: NgForm): void {}
}
