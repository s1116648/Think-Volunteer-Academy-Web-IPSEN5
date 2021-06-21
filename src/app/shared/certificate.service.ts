import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Certificate } from "./certificate.model";
import { HttpPaginatedResult } from "./http-paginated-result";

@Injectable({
	providedIn: "root",
})
export class CertificateService {
	constructor(private http: HttpClient) {}

	getCertificatesByUser(userID: string): Observable<HttpPaginatedResult<Certificate>> {
		return this.http.get<HttpPaginatedResult<Certificate>>(
			`/users/${userID}/certificates`
		);
	}
}
