import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseService } from "../course/course.service";
import { LessonRoutingModule } from "./lesson-routing.module";
import { LessonViewComponent } from "./lesson-view/lesson-view.component";
import {SharedModule} from "../shared/shared.module";
import { LessonInfoCardComponent } from "./lesson-view/lesson-info-card/lesson-info-card.component";
import { LessonBadgeCardComponent } from "./lesson-view/lesson-badge-card/lesson-badge-card.component";
import { LessonDocumentsCardComponent } from "./lesson-view/lesson-documents-card/lesson-documents-card.component";


@NgModule({
	declarations: [LessonViewComponent, LessonInfoCardComponent, LessonBadgeCardComponent, LessonDocumentsCardComponent],
    imports: [CommonModule, LessonRoutingModule, SharedModule],
    exports: [
        LessonViewComponent
    ],
	providers: [CourseService],
})
export class LessonModule {}
