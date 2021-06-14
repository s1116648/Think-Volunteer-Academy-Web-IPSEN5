import {Component, Input, OnInit} from "@angular/core";
import { faPlus, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { CreateQuestionDTO } from "../../dto/create-question.dto";
import {UpdateQuestionDTO} from "../../dto/update-question.dto";


@Component({
  selector: "app-admin-question-card",
  templateUrl: "./admin-question-card.component.html",
  styleUrls: ["./admin-question-card.component.scss"]
})
export class AdminQuestionCardComponent implements OnInit {
  icons = { faPlus, faTrash, faEdit };
  @Input() question: CreateQuestionDTO | UpdateQuestionDTO;
  constructor() { }

  ngOnInit(): void {
  }

  deleteQuestion(): void {
    console.log("Deleting question");
  }
}
