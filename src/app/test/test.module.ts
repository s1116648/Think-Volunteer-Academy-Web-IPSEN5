import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { AdminEditTestViewComponent } from "./admin-edit-test-view/admin-edit-test-view.component";
import { TestRoutingModule } from "./test-routing.module";
import { AdminQuestionCardComponent } from "./admin-edit-test-view/admin-question-card/admin-question-card.component";
import { AdminAnswerCardComponent } from "./admin-edit-test-view/admin-question-card/admin-answer-card/admin-answer-card.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { EditQuestionModalComponent } from "./modals/edit-question-modal/edit-question-modal.component";
import { AddAnswerComponent } from "./admin-edit-test-view/admin-question-card/add-answer/add-answer.component";
import { AdminAnswerCardCreatedComponent } from "./admin-edit-test-view/admin-question-card/admin-answer-card-created/admin-answer-card-created.component";
import { AddQuestionModalComponent } from "./modals/add-question-modal/add-question-modal.component";
import { TestScreenComponent } from "./test-screen/test-screen.component";
import { TestScreenInfoComponent } from "./test-screen/test-info/test-screen-info.component";
import { QuestionComponent } from "./test-screen/question/question.component";

@NgModule({
	declarations: [
		AdminEditTestViewComponent,
		AdminQuestionCardComponent,
		AdminAnswerCardComponent,
		EditQuestionModalComponent,
		AddAnswerComponent,
		AdminAnswerCardCreatedComponent,
		AddQuestionModalComponent,
		TestScreenComponent,
		TestScreenInfoComponent,
		QuestionComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		TestRoutingModule,
		FormsModule,
		FontAwesomeModule,
		ReactiveFormsModule,
	],
	exports: [],
	providers: [],
})
export class TestModule {}
