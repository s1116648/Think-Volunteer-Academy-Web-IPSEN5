import { Injectable } from "@angular/core";
import { Lesson } from "../lesson/lesson.model";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class CourseService {
	lessonsCardsChanged = new Subject<Lesson[]>();
	private lessons: Lesson[] = [];

	constructor(private http: HttpClient) {}

	setLessonsCards(lessons: Lesson[]): void {
		this.lessons = lessons;
		this.setLessonCardNumbers();
		this.lessonsCardsChanged.next(this.lessons);
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

	setLessonCardNumbers(): void {
		this.lessons.forEach((lesson) => {
			lesson.lessonNumber = this.lessons.indexOf(lesson) + 1;
		});
	}
}
