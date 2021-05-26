import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
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

	constructor(
		private courseService: CourseService,
		private courseCategoryService: CourseCategoryService,
		private route: ActivatedRoute,
		private router: Router
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
}
