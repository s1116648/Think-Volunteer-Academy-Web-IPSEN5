import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Question } from "../model/question.model";
import { Test } from "../model/test.model";
import { TestService } from "../services/test.service";
import { CreateQuestionDTO } from "../dto/create-question.dto";
import { PlaceholderDirective } from "../../shared/placeholder.directive";
import { ModalService } from "../../shared/modal.service";
import { AddQuestionModalComponent } from "../modals/add-question-modal/add-question-modal.component";
import { QuestionService } from "../services/question.service";

@Component({
	selector: "app-admin-edit-test-view",
	templateUrl: "./admin-edit-test-view.component.html",
	styleUrls: ["./admin-edit-test-view.component.scss"],
})
export class AdminEditTestViewComponent implements OnInit {
	@ViewChild(PlaceholderDirective, { static: false })
	modalHost: PlaceholderDirective;

	questions: Question[] = [];
	newQuestions: CreateQuestionDTO[] = [];
	test: Test;

	icons = { faPlus };

	constructor(
		private route: ActivatedRoute,
		private testService: TestService,
		private modalService: ModalService,
		private questionService: QuestionService
	) {}

	ngOnInit(): void {
		this.route.params.subscribe((params: Params) => {
			this.testService
				.getTestByID(params.testId)
				.subscribe((test: Test) => {
					this.test = test;
					this.questions = this.test.questions;
					this.questionService.updateGlobalQuestionsArray(
						this.questions
					);
				});
		});
		this.questionService.questionsChanged.subscribe(
			(questions) => (this.questions = questions)
		);
	}

	addQuestion(): void {
		const modal = this.modalService.createModal(
			AddQuestionModalComponent,
			this.modalHost
		);

		modal.instance.test = this.test;
		modal.instance.set.subscribe((question: Question) => {
			const newQuestionsArr =
				this.questionService.getGlobalQuestionsArray();
			newQuestionsArr.push(question);
			this.questionService.updateGlobalQuestionsArray(newQuestionsArr);
		});
	}
}
