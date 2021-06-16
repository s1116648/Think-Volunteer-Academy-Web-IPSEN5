import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {faCheck, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import {NgForm} from "@angular/forms";
import {Question} from "../../models/question.model";
import {AnswerService} from "../../services/answer.service";
import {UpdateAnswerDTO} from "../../dto/update-answer.dto";
import {Test} from "../../models/test.model";

@Component({
  selector: "app-edit-question-modal",
  templateUrl: "./edit-question-modal.component.html",
  styleUrls: ["./edit-question-modal.component.scss"]
})
export class EditQuestionModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter();
  @Output() set = new EventEmitter<Test>();
  @Input() question: Question;

  icons = { faCheck, faPlus, faTrash };
  answerArray: UpdateAnswerDTO[] = [];

  constructor(private answerService: AnswerService) {}

  ngOnInit(): void {
    this.answerArray = this.question.answers.map((answer) => {
      const answerDto: UpdateAnswerDTO = {
        text: answer.text,
        correct: answer.correct
      };
      return answerDto;
    });

    this.answerService.newAnswersChanged
        .subscribe((answers) => {
          // console.log("New Answers: ", answers);
          this.answerArray.push(...answers);
          console.log(this.answerArray);
        });
  }

  close = (): void => this.closeModal.emit();

  update(questionForm: NgForm): void {
    const values = questionForm.value;
    console.log(values);
  }
}
