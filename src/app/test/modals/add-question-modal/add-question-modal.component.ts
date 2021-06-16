import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
	ViewChild,
} from "@angular/core";
import { faCheck, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { NgForm } from "@angular/forms";
import { AnswerService } from "../../services/answer.service";
import { Test } from "../../model/test.model";
import { UpdateAnswerDTO } from "../../dto/update-answer.dto";
import { QuestionService } from "../../services/question.service";
import { CreateQuestionDTO } from "../../dto/create-question.dto";
import { Question } from "../../model/question.model";

@Component({
	selector: "app-add-question-modal",
	templateUrl: "./add-question-modal.component.html",
	styleUrls: ["./add-question-modal.component.scss"],
})
export class AddQuestionModalComponent implements OnInit {
    @Output() closeModal = new EventEmitter();
    @Output() set = new EventEmitter<Question>();
    @Input() test: Test;
    @ViewChild("addQuestionForm") form: NgForm;

    icons = { faCheck, faPlus, faTrash };
    newAnswerArray: UpdateAnswerDTO[] = [];

    get isValid(): boolean {
        return this.newAnswerArray.length >= 2 && this.newAnswerArray.filter(answer => answer.correct).length > 0;
    }

    constructor(private answerService: AnswerService,
                private questionService: QuestionService) {}

    ngOnInit(): void {
        this.newAnswerArray = this.answerService.getGlobalAnswersArray();
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
        this.close();
    }

    close(): void {
        this.resetPopup();
        this.closeModal.emit();
    }

    resetPopup(): void {
        this.form.reset();
        this.answerService.updateGlobalAnswersArray([]);
    }
}
