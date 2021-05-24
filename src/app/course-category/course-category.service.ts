import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpPaginatedResult } from "../shared/http-paginated-result";
import { CourseCategory } from "./course-category.model";

@Injectable({
	providedIn: "root",
})
export class CourseCategoryService {
	constructor(private http: HttpClient) {}

	get(): Observable<HttpPaginatedResult<CourseCategory>> {
		return this.http.get<HttpPaginatedResult<CourseCategory>>(
			"/categories"
		);
	}
}
