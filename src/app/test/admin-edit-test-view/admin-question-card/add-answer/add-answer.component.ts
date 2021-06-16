import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import {AnswerService} from "../../../services/answer.service";
import {UpdateAnswerDTO} from "../../../dto/update-answer.dto";

@Component({
	selector: "app-add-answer",
	templateUrl: "./add-answer.component.html",
	styleUrls: ["./add-answer.component.scss"],
})
export class AddAnswerComponent implements OnInit {
	@ViewChild("newAnswerInput") newAnswerInput: ElementRef;
	@ViewChild("newAnswerCheckbox") newAnswerCheckbox: ElementRef;

    icons = { faTrash, faPlus };

	constructor(private answerService: AnswerService) {}

	ngOnInit(): void {}

    addAnswer(): void {
		const updateAnswerDTO: UpdateAnswerDTO = {
			text: this.newAnswerInput.nativeElement.value,
			correct: this.newAnswerCheckbox.nativeElement.checked
		};

		const tempArr = this.answerService.getGlobalAnswersArray();
		tempArr.push(updateAnswerDTO);
		this.answerService.updateGlobalAnswersArray(tempArr);
		this.clearInputFields();
    }

    clearInputFields(): void {
		this.newAnswerInput.nativeElement.value = null;
		this.newAnswerCheckbox.nativeElement.checked = false;
	}
}

