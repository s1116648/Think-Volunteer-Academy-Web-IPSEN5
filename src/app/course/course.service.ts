import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "./course.model";
import { CreateCourseDTO } from "./dto/create-course.dto";
import { UpdateCourseDTO } from "./dto/update-course.dto";

@Injectable({
	providedIn: "root",
})
export class CourseService {
	constructor(private http: HttpClient) {}

	getByID(id: string): Observable<Course> {
		return this.http.get<Course>(`/courses/${id}`);
	}

	create(dto: CreateCourseDTO): Observable<Course> {
		return this.http.post<Course>("/courses", dto);
	}

	update(id: string, dto: UpdateCourseDTO): Observable<Course> {
		return this.http.patch<Course>(`/courses/${id}`, dto);
	}
}
