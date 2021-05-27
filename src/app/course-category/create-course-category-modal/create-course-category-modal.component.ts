import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Modal } from "src/app/shared/modals/modal.interface";
import { CourseCategory } from "../course-category.model";
import { CourseCategoryService } from "../course-category.service";
import { CreateCourseCategoryDTO } from "../dto/create-course-category.dto";

@Component({
	selector: "app-create-course-category-modal",
	templateUrl: "./create-course-category-modal.component.html",
	styleUrls: ["./create-course-category-modal.component.scss"],
})
export class CreateCourseCategoryModalComponent implements OnInit, Modal {
	@Output() closeModal = new EventEmitter();
	@Output() created = new EventEmitter<CourseCategory>();

	constructor(private courseCategoryService: CourseCategoryService) {}

	ngOnInit(): void {}

	close = (): void => this.closeModal.emit();

	create(form: NgForm): void {
		const values = form.value;
		const dto: CreateCourseCategoryDTO = {
			name: values.name,
		};

		this.courseCategoryService
			.create(dto)
			.subscribe((category: CourseCategory) => {
				this.created.emit(category);
				this.close();
			});
	}
}
