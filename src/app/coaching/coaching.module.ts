import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoachOverviewComponent } from "./coach/coach-overview/coach-overview.component";
import { StudentOverviewComponent } from "./student/student-overview/student-overview.component";
import { CoachingRoutingModule } from "./coaching-routing.module";
import { SharedModule } from "../shared/shared.module";
import { AddStudentModalComponent } from "./coach/modals/add-student-modal/add-student-modal.component";
import { AddCoachModalComponent } from "./coach/modals/add-coach-modal/add-coach-modal.component";
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MyStudentsComponent } from "./my-students/my-students.component";


@NgModule({
    declarations: [CoachOverviewComponent, StudentOverviewComponent, AddStudentModalComponent, AddCoachModalComponent, MyStudentsComponent],
    imports: [
        CommonModule,
        CoachingRoutingModule,
        SharedModule,
        FormsModule,
        FontAwesomeModule
    ]
})
export class CoachingModule {
}
