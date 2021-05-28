import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Modal } from "src/app/shared/modals/modal.interface";
import { CourseCategory } from "../course-category.model";
import { CourseCategoryService } from "../course-category.service";
import { CreateCourseCategoryDTO } from "../dto/create-course-category.dto";
import { UpdateCourseCategoryDTO } from "../dto/update-course-category.dto";

@Component({
	selector: "app-set-course-category-modal",
	templateUrl: "./set-course-category-modal.component.html",
	styleUrls: ["./set-course-category-modal.component.scss"],
})
export class SetCourseCategoryModalComponent implements OnInit, Modal {
	@Output() closeModal = new EventEmitter();
	@Output() created = new EventEmitter<CourseCategory>();
	@Output() updated = new EventEmitter<CourseCategory>();

	@Input() category?: CourseCategory;

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

	update(form: NgForm): void {
		const values = form.value;
		const dto: UpdateCourseCategoryDTO = {
			name: values.name,
		};

		this.courseCategoryService
			.update(this.category?.id, dto)
			.subscribe((category: CourseCategory) => {
				this.updated.next(category);
				this.close();
			});
	}
}
