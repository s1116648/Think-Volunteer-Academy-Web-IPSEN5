import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { faCheck, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { CourseCategory } from "src/app/course-category/course-category.model";
import { CourseCategoryService } from "src/app/course-category/course-category.service";
import { CreateCourseCategoryModalComponent } from "src/app/course-category/create-course-category-modal/create-course-category-modal.component";
import { HttpPaginatedResult } from "src/app/shared/http-paginated-result";
import { ModalService } from "src/app/shared/modal.service";
import { PlaceholderDirective } from "src/app/shared/placeholder.directive";
import { Course } from "../course.model";
import { CourseService } from "../course.service";
import { CreateCourseDTO } from "../dto/create-course.dto";

@Component({
	selector: "app-create-course",
	templateUrl: "./create-course.component.html",
	styleUrls: ["./create-course.component.scss"],
})
export class CreateCourseComponent implements OnInit {
	icons = { faCheck, faPlus, faTimes };

	categories: CourseCategory[] = [];

	@ViewChild(PlaceholderDirective, { static: false })
	private modalHost: PlaceholderDirective;

	constructor(
		private courseService: CourseService,
		private courseCategoryService: CourseCategoryService,
		private route: ActivatedRoute,
		private router: Router,
		private modalService: ModalService
	) {}

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
			image: "testimage",
			categoryId: values.category.id,
		};

		this.courseService.create(dto).subscribe((course: Course) => {
			this.router.navigate(["../", course.id], {
				relativeTo: this.route,
			});
		});
	}

	showCreateCategoryModal(): void {
		const modal = this.modalService.createModal(
			CreateCourseCategoryModalComponent,
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
}
