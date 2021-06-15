import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {faCheck, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import {NgForm} from "@angular/forms";
import {Lesson} from "../../../lesson/lesson.model";
import {CreateAnswerDTO} from "../../dto/create-answer.dto";
import {AnswerService} from "../../answer.service";

@Component({
  selector: "app-add-question-modal",
  templateUrl: "./add-question-modal.component.html",
  styleUrls: ["./add-question-modal.component.scss"]
})
export class AddQuestionModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter();
  @Output() set = new EventEmitter<Lesson>();

  icons = { faCheck, faPlus, faTrash };
  newAnswerArray: CreateAnswerDTO[] = [];

  constructor(private answerService: AnswerService) { }

  ngOnInit(): void {
    this.newAnswerArray = this.answerService.getAllNewAnswers();
    this.answerService.newAnswersChanged
        .subscribe((answers) => {
          this.newAnswerArray = answers;
        });
  }

  update(addQuestionForm: NgForm): void {
    const values = addQuestionForm.value;
    console.log(values);
  }

  close = (): void => this.closeModal.emit();
}
