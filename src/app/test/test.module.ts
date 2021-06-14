import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import { AdminEditTestViewComponent } from "./admin-edit-test-view/admin-edit-test-view.component";
import {TestRoutingModule} from "./test-routing.module";
import { AdminQuestionCardComponent } from "./admin-edit-test-view/admin-question-card/admin-question-card.component";
import { AdminAnswerCardComponent } from "./admin-edit-test-view/admin-question-card/admin-answer-card/admin-answer-card.component";
import {FormsModule} from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { EditQuestionModalComponent } from "./modals/edit-question-modal/edit-question-modal.component";

@NgModule({
    declarations: [AdminEditTestViewComponent, AdminQuestionCardComponent, AdminAnswerCardComponent, EditQuestionModalComponent],
    imports: [
        CommonModule,
        SharedModule,
        TestRoutingModule,
        FormsModule,
        FontAwesomeModule
    ],
    exports: [],
    providers: []
})
export class TestModule{}
