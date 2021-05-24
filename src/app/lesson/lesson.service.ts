import { Injectable } from "@angular/core";
import { Lesson } from "./lesson.model";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class LessonService {
	lessonsChanged = new Subject<Lesson[]>();
	private lessons: Lesson[] = [];

	constructor(private http: HttpClient) {}

	setLessons(lessons: Lesson[]): void {
		this.lessons = lessons;
		this.setLessonNumbers();
		this.lessonsChanged.next(this.lessons);
	}

	getLessons(): Lesson[] {
		return this.lessons.slice();
	}

	fetchLessonsFromApi(): Observable<Lesson[]> {
		return this.http.get<any>("/lessons").pipe(
			map((responseData: { items: Lesson[] }) => {
				return responseData.items;
			})
		);
	}

	setLessonNumbers(): void {
		this.lessons.forEach((lesson) => {
			lesson.lessonNumber = this.lessons.indexOf(lesson) + 1;
		});
	}
}
