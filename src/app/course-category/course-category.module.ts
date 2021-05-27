import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { CreateCourseCategoryModalComponent } from "./create-course-category-modal/create-course-category-modal.component";
import { FormsModule } from "@angular/forms";

@NgModule({
	declarations: [CreateCourseCategoryModalComponent],
	imports: [CommonModule, SharedModule, FormsModule],
	exports: [CreateCourseCategoryModalComponent],
})
export class CourseCategoryModule {}
