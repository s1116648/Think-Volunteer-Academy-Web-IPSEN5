import { Component, NgModule, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth/auth.service";
import { HttpPaginatedResult } from "src/app/shared/http-paginated-result";
import { CourseCategory } from "../../course-category/course-category.model";
import { CourseCategoryService } from "../../course-category/course-category.service";
import { Course } from "../course.model";
import { CourseService } from "../course.service";
import { MyCourse } from "./my-courses/my-courses.model";

@Component({
	selector: "app-courses-overview",
	templateUrl: "./courses-overview.component.html",
	styleUrls: ["./courses-overview.component.scss"],
})
export class CoursesOverviewComponent implements OnInit {
	myCourses: MyCourse[] = [];
	courseCategories: CourseCategory[] = [];

	get categoriesWithCourses(): CourseCategory[] {
		return this.courseCategories.filter(
			(category) => category.coursesCount > 0
		);
	}

	constructor(
		private courseCategoryService: CourseCategoryService,
		private courseService: CourseService,
		private authService: AuthService
	) {}

	ngOnInit(): void {
		if (this.authService.isLoggedIn()) {
			const user = this.authService.loginInfo.getValue().user;

			this.courseService
				.getCoursesFromUser(user.id)
				.subscribe((result: HttpPaginatedResult<MyCourse>) => {
					this.myCourses = result.items;
				});
		}

		this.courseCategoryService.get().subscribe((categories) => {
			this.courseCategories = categories.items;
		});
	}
}
