import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpPaginatedResult } from "../shared/http-paginated-result";
import { Lesson } from "./lesson.model";
import { CreateCourseDTO } from "../course/dto/create-course.dto";
import { Course } from "../course/course.model";
import { CreateLessonDTO } from "./dto/create-lesson.dto";

@Injectable({
	providedIn: "root",
})
export class LessonService {
	constructor(private http: HttpClient) {}

	get(courseID: string): Observable<HttpPaginatedResult<Lesson>> {
		return this.http.get<HttpPaginatedResult<Lesson>>(
			`/courses/${courseID}/lessons`
		);
	}

  create(dto: CreateLessonDTO): Observable<Lesson> {
    return this.http.post<Lesson>("/lessons", dto);
  }
}
