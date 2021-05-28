import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { SetCourseCategoryModalComponent } from "./set-course-category-modal/set-course-category-modal.component";
import { FormsModule } from "@angular/forms";

@NgModule({
	declarations: [SetCourseCategoryModalComponent],
	imports: [CommonModule, SharedModule, FormsModule],
	exports: [SetCourseCategoryModalComponent],
})
export class CourseCategoryModule {}
