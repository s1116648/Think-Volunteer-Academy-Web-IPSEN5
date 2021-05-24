import { Route } from "@angular/compiler/src/core";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { CourseCategory } from "src/app/course-category/course-category.model";
import { CourseCategoryService } from "src/app/course-category/course-category.service";
import { HttpPaginatedResult } from "src/app/shared/http-paginated-result";
import { Course } from "../course.model";
import { CourseService } from "../course.service";
import { CreateCourseDTO } from "../dto/create-course.dto";
import { UpdateCourseDTO } from "../dto/update-course.dto";

@Component({
	selector: "app-create-course",
	templateUrl: "./edit-course.component.html",
	styleUrls: ["./edit-course.component.scss"],
})
export class EditCourseComponent implements OnInit {
	icons = { faCheck };

	course: Course;

	categories: CourseCategory[] = [];
	category: CourseCategory;

	constructor(
		private courseService: CourseService,
		private courseCategoryService: CourseCategoryService,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.courseService
			.getByID(this.route.snapshot.params.id)
			.subscribe((course: Course) => {
				this.course = course;
			});

		this.courseCategoryService
			.get()
			.subscribe((categories: HttpPaginatedResult<CourseCategory>) => {
				this.categories = categories.items;
			});
	}

	update(form: NgForm) {
		if (form.invalid) return;

		const dto: UpdateCourseDTO = {
			...form.value,
			image: "testimage",
			categoryId: this.category.id,
		};

		this.courseService
			.update(this.course.id, dto)
			.subscribe((course: Course) => {
				console.log(course);
			});
	}
}
