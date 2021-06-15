import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {faCheck, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import {NgForm} from "@angular/forms";
import {Lesson} from "../../../lesson/lesson.model";
import {Question} from "../../question.model";
import {AnswerService} from "../../answer.service";
import {UpdateAnswerDTO} from "../../dto/update-answer.dto";

@Component({
  selector: "app-edit-question-modal",
  templateUrl: "./edit-question-modal.component.html",
  styleUrls: ["./edit-question-modal.component.scss"]
})
export class EditQuestionModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter();
  @Output() set = new EventEmitter<Lesson>();
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

    console.log("Answer array: ", this.answerArray);
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
