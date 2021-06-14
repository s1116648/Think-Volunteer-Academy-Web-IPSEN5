import {Component, Input, OnInit, ViewChild} from "@angular/core";
import { faPlus, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import {ModalService} from "../../../shared/modal.service";
import {PlaceholderDirective} from "../../../shared/placeholder.directive";
import {EditQuestionModalComponent} from "../../modals/edit-question-modal/edit-question-modal.component";
import {Question} from "../../question.model";


@Component({
    selector: "app-admin-question-card",
    templateUrl: "./admin-question-card.component.html",
    styleUrls: ["./admin-question-card.component.scss"]
})
export class AdminQuestionCardComponent implements OnInit {
    icons = { faPlus, faTrash, faEdit };

    @ViewChild(PlaceholderDirective, { static: false })
    modalHost: PlaceholderDirective;

    @Input() question: Question;
    constructor(private modalService: ModalService) { }

    ngOnInit(): void {
    }

    deleteQuestion(): void {
        console.log("Deleting question");
    }

    openEditModal(question: Question): void {
        const modal = this.modalService.createModal(
            EditQuestionModalComponent,
            this.modalHost
        );
        modal.instance.question = question;
        console.log(question);
    }
}
