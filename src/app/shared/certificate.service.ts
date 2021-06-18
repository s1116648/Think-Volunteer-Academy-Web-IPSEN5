import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Certificate } from "./certificate.model";
import { HttpPaginatedResult } from "./http-paginated-result";

@Injectable({
	providedIn: "root",
})
export class CertificateService {
	constructor(private http: HttpClient) {}

	getCertificateByUser(
		userID: string,
		courseID?: string
	): Observable<HttpPaginatedResult<Certificate>> {
		const params = new HttpParams();
		if (courseID) params.set(courseID, courseID);

		return this.http.get<HttpPaginatedResult<Certificate>>(
			`/users/${userID}/certificates`,
			{ params }
		);
	}
}
