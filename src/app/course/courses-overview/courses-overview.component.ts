import { Component, NgModule, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth/auth.service";
import { HttpPaginatedResult } from "src/app/shared/http-paginated-result";
import { CourseCategory } from "../../course-category/course-category.model";
import { CourseCategoryService } from "../../course-category/course-category.service";
import { CourseService } from "../course.service";
import { MyCourse } from "../my-courses.model";
import { Coach } from "../../coaching/coach/coach.model";
import { CoachService } from "../../coaching/coach/coach.service";
import { HttpErrorResponse } from "@angular/common/http";
import { EMPTY } from "rxjs";

@Component({
	selector: "app-courses-overview",
	templateUrl: "./courses-overview.component.html",
	styleUrls: ["./courses-overview.component.scss"],
})
export class CoursesOverviewComponent implements OnInit {
	myCourses: MyCourse[] = [];
	courseCategories: CourseCategory[] = [];

	coach: Coach;

	get categoriesWithCourses(): CourseCategory[] {
		return this.courseCategories.filter(
			(category) => category.coursesCount > 0
		);
	}

	constructor(
		private courseCategoryService: CourseCategoryService,
		private courseService: CourseService,
		private authService: AuthService,
		private coachService: CoachService
	) {}

	ngOnInit(): void {
		const user = this.authService.loginInfo.getValue().user;

		this.courseService
			.getCoursesFromUser(user.id)
			.subscribe((result: HttpPaginatedResult<MyCourse>) => {
				this.myCourses = result.items;
			});

		this.courseCategoryService.get().subscribe((categories) => {
			this.courseCategories = categories.items;
		});

		this.coachService.getCoachOfUser(user.id).subscribe((coach: Coach) => this.coach = coach, () => EMPTY);
	}
}
