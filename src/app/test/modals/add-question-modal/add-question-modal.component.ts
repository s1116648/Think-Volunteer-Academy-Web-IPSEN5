import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {faCheck, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import {NgForm} from "@angular/forms";
import {AnswerService} from "../../answer.service";
import {Test} from "../../test.model";
import {UpdateAnswerDTO} from "../../dto/update-answer.dto";
import {QuestionService} from "../../question.service";
import {CreateQuestionDTO} from "../../dto/create-question.dto";
import {Question} from "../../question.model";

@Component({
    selector: "app-add-question-modal",
    templateUrl: "./add-question-modal.component.html",
    styleUrls: ["./add-question-modal.component.scss"]
})
export class AddQuestionModalComponent implements OnInit {
    @Output() closeModal = new EventEmitter();
    @Output() set = new EventEmitter<Question>();
    @Input() test: Test;

    icons = { faCheck, faPlus, faTrash };
    newAnswerArray: UpdateAnswerDTO[] = [];

    constructor(private answerService: AnswerService,
                private questionService: QuestionService) {}

    ngOnInit(): void {
        this.newAnswerArray = this.answerService.getAllNewAnswers();
        this.answerService.newAnswersChanged
            .subscribe((answers) => {
                this.newAnswerArray = answers;
            });
    }

    create(addQuestionForm: NgForm): void {
        const values = addQuestionForm.value;

        const dto: CreateQuestionDTO = {
            text: values.question,
            answers: this.newAnswerArray
        };
        this.questionService.create(this.test.id, dto)
            .subscribe((question: Question) => this.set.emit(question));
        this.newAnswerArray = [];
        this.close();
    }

    close = (): void => this.closeModal.emit();
}
