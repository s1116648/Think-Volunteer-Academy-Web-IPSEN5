import {Component, Input, OnInit, ViewChild} from "@angular/core";
import { faPlus, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import {ModalService} from "../../../shared/modal.service";
import {PlaceholderDirective} from "../../../shared/placeholder.directive";
import {EditQuestionModalComponent} from "../../modals/edit-question-modal/edit-question-modal.component";
import {Question} from "../../question.model";
import {QuestionService} from "../../question.service";


@Component({
    selector: "app-admin-question-card",
    templateUrl: "./admin-question-card.component.html",
    styleUrls: ["./admin-question-card.component.scss"]
})
export class AdminQuestionCardComponent implements OnInit {

    @Input() question: Question;
    @Input() index: number;

    @ViewChild(PlaceholderDirective, { static: false })
    modalHost: PlaceholderDirective;

    icons = { faPlus, faTrash, faEdit };
    testId: string;
    constructor(private modalService: ModalService,
                private questionService: QuestionService) {}

    ngOnInit(): void {}

    deleteQuestion(): void {
        this.questionService.delete(this.question.id)
            .subscribe(() => {
                const questionsArray = this.questionService.getGlobalQuestionsArray();
                const tempArray = questionsArray.filter(x => x.id !== this.question.id);
                this.questionService.updateGlobalQuestionsArray(tempArray);
        });
    }

    openEditModal(question: Question): void {
        const modal = this.modalService.createModal(
            EditQuestionModalComponent,
            this.modalHost
        );
        modal.instance.question = question;
    }
}
