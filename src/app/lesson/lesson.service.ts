import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpPaginatedResult } from "../shared/http-paginated-result";
import { Lesson } from "./lesson.model";

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

	swap(lesson: Lesson, newIndex: number): Observable<void> {
		return this.http.patch<void>(`/lessons/${lesson.id}/order`, {
			newIndex,
		});
	}
}
