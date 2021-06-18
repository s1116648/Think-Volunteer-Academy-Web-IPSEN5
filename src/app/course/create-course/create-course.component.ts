import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import {
	faCheck,
	faPlus,
	faTimes,
	faPen,
	faImage
} from "@fortawesome/free-solid-svg-icons";
import { CourseCategory } from "src/app/course-category/course-category.model";
import { CourseCategoryService } from "src/app/course-category/course-category.service";
import { SetCourseCategoryModalComponent } from "src/app/course-category/set-course-category-modal/set-course-category-modal.component";
import { FileService } from "src/app/file/file.service";
import { HttpPaginatedResult } from "src/app/shared/http-paginated-result";
import { ModalService } from "src/app/shared/modal.service";
import { PlaceholderDirective } from "src/app/shared/placeholder.directive";
import { Course } from "../course.model";
import { CourseService } from "../course.service";
import { CreateCourseDTO } from "../dto/create-course.dto";
import { NotifierService } from "angular-notifier";

@Component({
	selector: "app-create-course",
	templateUrl: "./create-course.component.html",
	styleUrls: ["./create-course.component.scss"]
})
export class CreateCourseComponent implements OnInit {
	icons = { faCheck, faPlus, faTimes, faPen, faImage };

	categories: CourseCategory[] = [];

	@ViewChild(PlaceholderDirective, { static: false })
	private modalHost: PlaceholderDirective;

	constructor(
		private courseService: CourseService,
		private courseCategoryService: CourseCategoryService,
		private fileService: FileService,
		private route: ActivatedRoute,
		private router: Router,
		private modalService: ModalService,
		private notifierService: NotifierService
	) {
	}

	ngOnInit(): void {
		this.courseCategoryService
			.get()
			.subscribe((categories: HttpPaginatedResult<CourseCategory>) => {
				this.categories = categories.items;
			});
	}

	create(form: NgForm): void {
		const values = form.value;

		const dto: CreateCourseDTO = {
			name: values.name,
			description: values.description,
			image: values.image,
			categoryId: values.category.id
		};

		this.courseService.create(dto).subscribe((course: Course) => {
			this.notifierService.notify("success", "Course has been created.");
			this.router.navigate(["../", course.id], {
				relativeTo: this.route
			});
		}, (e: HttpErrorResponse) => {
			this.notifierService.notify("error", "An error occurred while creating the course.");
		});
	}

	showCreateCategoryModal(): void {
		const modal = this.modalService.createModal(
			SetCourseCategoryModalComponent,
			this.modalHost
		);
		modal.instance.created.subscribe((category: CourseCategory) => {
			this.categories.push(category);
		});
	}

	removeCategory(event: Event, category: CourseCategory): void {
		event.stopPropagation();
		this.courseCategoryService.remove(category.id).subscribe(() => {
			const index = this.categories.findIndex(
				(c) => c.id === category.id
			);
			this.categories.splice(index, 1);
		});
	}

	updateCategory(event: Event, category: CourseCategory): void {
		event.stopPropagation();
		const modal = this.modalService.createModal(
			SetCourseCategoryModalComponent,
			this.modalHost
		);
		modal.instance.category = category;
		modal.instance.updated.subscribe((updatedCategory: CourseCategory) => {
			const index = this.categories.findIndex(
				(c) => c.id === category.id
			);
			this.categories[index] = updatedCategory;
		});
	}
}
