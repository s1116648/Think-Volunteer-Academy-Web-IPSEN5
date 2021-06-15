import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import {AnswerService} from "../../../answer.service";
import {CreateAnswerDTO} from "../../../dto/create-answer.dto";

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
		const createAnswerDTO: CreateAnswerDTO = {
			text: this.newAnswerInput.nativeElement.value,
			correct: this.newAnswerCheckbox.nativeElement.checked
		};
		console.log("DTO: ", createAnswerDTO);
		this.clearInputFields();
		this.answerService.addNewLessonToArray(createAnswerDTO);
    }

    clearInputFields(): void {
		this.newAnswerInput.nativeElement.value = null;
		this.newAnswerCheckbox.nativeElement.checked = false;
	}
}

