import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpPaginatedResult } from "../shared/http-paginated-result";
import { Course } from "./course.model";
import { CreateCourseDTO } from "./dto/create-course.dto";
import { UpdateCourseDTO } from "./dto/update-course.dto";
import { MyCourse } from "./my-courses.model";

@Injectable({
	providedIn: "root",
})
export class CourseService {
	constructor(private http: HttpClient) {}

	get(): Observable<HttpPaginatedResult<Course>> {
		return this.http.get<HttpPaginatedResult<Course>>("/courses");
	}

	getByID(id: string): Observable<Course> {
		return this.http.get<Course>(`/courses/${id}`);
	}

	create(dto: CreateCourseDTO): Observable<Course> {
		return this.http.post<Course>("/courses", dto);
	}

	update(id: string, dto: UpdateCourseDTO): Observable<Course> {
		return this.http.patch<Course>(`/courses/${id}`, dto);
	}

	remove(id: string): Observable<void> {
		return this.http.delete<void>(`/courses/${id}`);
	}

	getSimilar(id: string): Observable<HttpPaginatedResult<Course>> {
		return this.http.get<HttpPaginatedResult<Course>>(
			`/courses/${id}/similar`
		);
	}

	getCoursesByCategory(
		categoryId: string
	): Observable<HttpPaginatedResult<Course>> {
		return this.http.get<HttpPaginatedResult<Course>>(
			`/categories/${categoryId}/courses`
		);
	}

	getCoursesFromUser(id: string): Observable<HttpPaginatedResult<MyCourse>> {
		return this.http.get<HttpPaginatedResult<MyCourse>>(
			`/users/${id}/courses`
		);
	}
}
