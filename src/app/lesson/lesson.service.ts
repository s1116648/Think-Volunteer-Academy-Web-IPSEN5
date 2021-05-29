import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { shareReplay } from "rxjs/operators";
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

	swap(lesson: Lesson, newIndex: number): Observable<Lesson[]> {
		return this.http.patch<Lesson[]>(`/lessons/${lesson.id}/order`, {
			newIndex,
		});
	}
}
