import { Component, OnInit } from "@angular/core";
import { faPlus, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { HttpPaginatedResult } from "src/app/shared/http-paginated-result";
import { environment } from "src/environments/environment";
import { Course } from "../course.model";
import { CourseService } from "../course.service";

@Component({
	selector: "app-admin-overview",
	templateUrl: "./admin-overview.component.html",
	styleUrls: ["./admin-overview.component.scss"],
})
export class AdminOverviewComponent implements OnInit {
	icons = { faPlus, faArrowRight };

	courses: Course[] = [];

	constructor(private courseService: CourseService) {}

	ngOnInit(): void {
		this.courseService
			.get()
			.subscribe((result: HttpPaginatedResult<Course>) => {
				this.courses = result.items;
			});
	}

	getCourseImage(path: string): string {
		return environment.S3_ENDPOINT + path;
	}
}
