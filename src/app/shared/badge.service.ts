import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Badge } from "./badge.model";
import { HttpPaginatedResult } from "./http-paginated-result";

@Injectable({
	providedIn: "root",
})
export class BadgeService {
	constructor(private http: HttpClient) {}

	getBadgesByUser(
		userID: string,
		courseID?: string
	): Observable<HttpPaginatedResult<Badge>> {
		const params = new HttpParams();
		if (courseID) params.set(courseID, courseID);

		return this.http.get<HttpPaginatedResult<Badge>>(
			`/users/${userID}/badges`,
			{ params }
		);
	}
}
