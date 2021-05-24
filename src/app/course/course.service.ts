import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "./course.model";
import { CreateCourseDTO } from "./dto/create-course.dto";

@Injectable({
	providedIn: "root",
})
export class CourseService {
	constructor(private http: HttpClient) {}

	create(dto: CreateCourseDTO): Observable<Course> {
		return this.http.post<Course>("/courses", dto);
	}
}
