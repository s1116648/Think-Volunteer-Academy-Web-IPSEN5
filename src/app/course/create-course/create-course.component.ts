import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { CourseCategory } from "src/app/course-category/course-category.model";
import { CourseCategoryService } from "src/app/course-category/course-category.service";
import { HttpPaginatedResult } from "src/app/shared/http-paginated-result";
import { Course } from "../course.model";
import { CourseService } from "../course.service";
import { CreateCourseDTO } from "../dto/create-course.dto";

@Component({
	selector: "app-create-course",
	templateUrl: "./create-course.component.html",
	styleUrls: ["./create-course.component.scss"],
})
export class CreateCourseComponent implements OnInit {
	icons = { faCheck };

	categories: CourseCategory[] = [];
	category: CourseCategory;

	constructor(
		private courseService: CourseService,
		private courseCategoryService: CourseCategoryService
	) {}

	ngOnInit(): void {
		this.courseCategoryService
			.get()
			.subscribe((categories: HttpPaginatedResult<CourseCategory>) => {
				this.categories = categories.items;
				// this.category = this.categories[0];
			});
	}

	create(form: NgForm) {
		if (form.invalid) return;

		const dto: CreateCourseDTO = {
			...form.value,
			image: "testimage",
			categoryId: this.category.id,
		};

		this.courseService.create(dto).subscribe((course: Course) => {
			console.log(course);
		});
	}
}
