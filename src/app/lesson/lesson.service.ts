import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpPaginatedResult } from "../shared/http-paginated-result";
import { Lesson } from "./lesson.model";

@Injectable({
	providedIn: "root",
})
export class LessonService {
	private lessons: Lesson[] = [
		// Dummy data
		{
			id: "1",
			name: "Culture of Bali",
			image: "/assets/images/nature.jpeg",
			content: "test",
			length: 20,
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			updatedAt: new Date("2021-11-01"),
			createdAt: new Date("2020-11-01"),
		},
		{
			id: "2",
			name: "Culture of Bali",
			image: "/assets/images/nature.jpeg",
			content: "test",
			length: 20,
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			updatedAt: new Date("2021-11-01"),
			createdAt: new Date("2020-11-01"),
		},
		{
			id: "3",
			name: "Culture of Bali",
			image: "/assets/images/nature.jpeg",
			content: "test",
			length: 20,
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			updatedAt: new Date("2021-11-01"),
			createdAt: new Date("2020-11-01"),
		},
		{
			id: "4",
			name: "Culture of Bali",
			image: "/assets/images/nature.jpeg",
			content: "test",
			length: 20,
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			updatedAt: new Date("2021-11-01"),
			createdAt: new Date("2020-11-01"),
		},
		{
			id: "10",
			name: "Culture of Bali",
			image: "/assets/images/nature.jpeg",
			content: "test",
			length: 20,
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			updatedAt: new Date("2021-11-01"),
			createdAt: new Date("2020-11-01"),
		},
	];

	constructor(private http: HttpClient) {}

	get(courseID: string): Observable<HttpPaginatedResult<Lesson>> {
		// return this.http.get<HttpPaginatedResult<Lesson>>(
		// 	`/courses/${courseID}/lessons`
		// );
		return new Observable((o) =>
			o.next({
				pagination: {
					currentPage: 0,
					pageSize: 0,
					totalItems: 0,
					totalPages: 0,
				},
				items: this.lessons,
			})
		);
	}
}
