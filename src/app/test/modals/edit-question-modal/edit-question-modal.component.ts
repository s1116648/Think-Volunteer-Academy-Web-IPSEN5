import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {NgForm} from "@angular/forms";
import {Lesson} from "../../../lesson/lesson.model";
import {Question} from "../../question.model";

@Component({
  selector: "app-edit-question-modal",
  templateUrl: "./edit-question-modal.component.html",
  styleUrls: ["./edit-question-modal.component.scss"]
})
export class EditQuestionModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter();
  @Output() set = new EventEmitter<Lesson>();

  @Input() question: Question;
  icons = { faCheck };
  constructor() { }

  ngOnInit(): void {
  }

  close = (): void => this.closeModal.emit();

  update(questionForm: NgForm): void {
    const values = questionForm.value;
    console.log(values);
  }
}
