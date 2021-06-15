import { Component, OnInit } from "@angular/core";
import {faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: "app-add-answer",
	templateUrl: "./add-answer.component.html",
	styleUrls: ["./add-answer.component.scss"],
})
export class AddAnswerComponent implements OnInit {

    icons = { faTrash, faPlus };
	constructor() {}

	ngOnInit(): void {}
}
