import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpPaginatedResult } from "../shared/http-paginated-result";
import { CourseCategory } from "./course-category.model";
import { CreateCourseCategoryDTO } from "./dto/create-course-category.dto";

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

	create(dto: CreateCourseCategoryDTO): Observable<CourseCategory> {
		return this.http.post<CourseCategory>("/categories", dto);
	}

	remove(id: string): Observable<void> {
		return this.http.delete<void>(`/categories/${id}`);
	}
}
