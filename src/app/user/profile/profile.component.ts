import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";
import { Course } from "src/app/course/course.model";
import { CourseService } from "src/app/course/course.service";
import { MyCourse } from "src/app/course/my-courses.model";
import { Badge } from "src/app/shared/badge.model";
import { HttpPaginatedResult } from "src/app/shared/http-paginated-result";
import { User } from "../user.model";
import { UserService } from "../user.service";
import { Coach } from "../../coaching/coach/coach.model";
import { CoachService } from "../../coaching/coach/coach.service";

@Component({
	selector: "app-profile",
	templateUrl: "./profile.component.html",
	styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
	user: User;
	coach?: Coach;

	courses: Course[] = [];

	constructor(
		private userService: UserService,
		private courseService: CourseService,
		private route: ActivatedRoute,
		private authService: AuthService,
		private coachService: CoachService
	) {}

	ngOnInit(): void {
		const currentUser = this.authService.loginInfo.getValue().user;

		this.coachService.getCoachOfUser(currentUser.id).subscribe((coach: Coach) => {
			this.coach = coach;
		});

		this.route.params.subscribe((params: Params) => {
			this.fetchUser(params).subscribe((user: User) => {
				this.user = user;

				this.courseService
					.getCoursesFromUser(user.id)
					.subscribe((result: HttpPaginatedResult<MyCourse>) => {
						this.courses = result.items.map((c) => c.course);
					});
			});
		});
	}

	fetchUser(params: Params): Observable<User> {
		if (params.id) return this.userService.getByID(params.id);

		const user = this.authService.loginInfo.getValue().user;
		return new Observable<User>((observer) => observer.next(user));
	}
}
