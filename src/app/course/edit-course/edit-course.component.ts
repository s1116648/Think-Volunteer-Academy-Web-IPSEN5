import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { CourseCategory } from "src/app/course-category/course-category.model";
import { CourseCategoryService } from "src/app/course-category/course-category.service";
import { HttpPaginatedResult } from "src/app/shared/http-paginated-result";
import { Course } from "../course.model";
import { CourseService } from "../course.service";
import { UpdateCourseDTO } from "../dto/update-course.dto";

@Component({
	selector: "app-create-course",
	templateUrl: "./edit-course.component.html",
	styleUrls: ["./edit-course.component.scss"],
})
export class EditCourseComponent implements OnInit {
	icons = { faCheck, faTrash };

	course: Course;

	categories: CourseCategory[] = [];

	constructor(
		private courseService: CourseService,
		private courseCategoryService: CourseCategoryService,
		private route: ActivatedRoute,
		private router: Router,
		private location: Location
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

	update(form: NgForm): void {
		const values = form.value;

		const dto: UpdateCourseDTO = {
			name: values.name,
			description: values.description,
			image: "testimage",
			categoryId: values.category.id,
		};

		this.courseService
			.update(this.course.id, dto)
			.subscribe(() => this.location.back());
	}

	remove(): void {
		this.courseService
			.remove(this.course.id)
			.subscribe(() => this.router.navigate(["/admin", "courses"]));
	}
}
