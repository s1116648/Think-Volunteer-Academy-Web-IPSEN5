import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { faCheck, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { NgForm } from "@angular/forms";
import { Question } from "../../model/question.model";
import { AnswerService } from "../../services/answer.service";
import { UpdateAnswerDTO } from "../../dto/update-answer.dto";
import { UpdateQuestionDTO } from "../../dto/update-question.dto";
import { QuestionService } from "../../services/question.service";

@Component({
    selector: "app-edit-question-modal",
    templateUrl: "./edit-question-modal.component.html",
    styleUrls: ["./edit-question-modal.component.scss"]
})
export class EditQuestionModalComponent implements OnInit {
    @Output() closeModal = new EventEmitter();
    @Output() set = new EventEmitter<Question>();
    @Input() question: Question;
    @ViewChild("editQuestionForm") form: NgForm;

    icons = { faCheck, faPlus, faTrash };
    answerArray: UpdateAnswerDTO[] = [];

    get isValid(): boolean {
        return this.answerArray.length >= 2 && this.answerArray.filter(answer => answer.correct).length > 0;
    }

    constructor(private answerService: AnswerService,
                private questionService: QuestionService) {
    }

    ngOnInit(): void {
        this.answerArray = this.question.answers.map((answer) => {
            const answerDto: UpdateAnswerDTO = {
                text: answer.text,
                correct: answer.correct
            };
            return answerDto;
        });
        this.answerService.updateGlobalAnswersArray(this.answerArray);
        this.answerService.newAnswersChanged
            .subscribe((answers) => {
                this.answerArray = answers;
            });
    }

    update(questionForm: NgForm): void {
        const values = questionForm.value;

        const dto: UpdateQuestionDTO = {
            text: values.question,
            answers: this.answerArray
        };

        this.questionService.update(this.question.id, dto)
            .subscribe((question) => {
                this.set.emit(question);
            });

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
