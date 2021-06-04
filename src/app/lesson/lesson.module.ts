import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseService } from "../course/course.service";
import { LessonRoutingModule } from "./lesson-routing.module";
import { SetLessonModalComponent } from "./modals/set-lesson-modal/set-lesson-modal.component";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AdminLessonCardComponent } from "./admin-lesson-card/admin-lesson-card.component";
import { DndModule } from "ngx-drag-drop";
import { AdminEditLessonViewComponent } from "./admin-edit-lesson-view/admin-edit-lesson-view.component";
import { QuillModule } from "ngx-quill";
import { LessonViewComponent } from "./lesson-view/lesson-view.component";
import { LessonInfoCardComponent } from "./lesson-view/lesson-info-card/lesson-info-card.component";
import { LessonBadgeCardComponent } from "./lesson-view/lesson-badge-card/lesson-badge-card.component";
import { LessonDocumentsCardComponent } from "./lesson-view/lesson-documents-card/lesson-documents-card.component";

@NgModule({
	declarations: [
		SetLessonModalComponent,
		AdminLessonCardComponent,
		LessonViewComponent,
		LessonInfoCardComponent,
		LessonBadgeCardComponent,
		LessonDocumentsCardComponent,
		AdminEditLessonViewComponent,
	],
	imports: [
		CommonModule,
		LessonRoutingModule,
		SharedModule,
		FormsModule,
		FontAwesomeModule,
		DndModule,
		QuillModule.forRoot(),
	],
	exports: [AdminLessonCardComponent],
	providers: [CourseService],
})
export class LessonModule {}
