import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpPaginatedResult } from "../shared/http-paginated-result";
import { Lesson } from "./lesson.model";
import { CreateLessonDTO } from "./dto/create-lesson.dto";
import { UpdateLessonDTO } from "./dto/update-lesson.dto";

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

	create(dto: CreateLessonDTO): Observable<Lesson> {
		return this.http.post<Lesson>("/lessons", dto);
	}

	getById(lessonId: string): Observable<Lesson> {
		return this.http.get<Lesson>(`/lessons/${lessonId}`);
	}

	update(id: string, dto: UpdateLessonDTO): Observable<Lesson> {
		return this.http.patch<Lesson>(`/lessons/${id}`, dto);
	}
}
