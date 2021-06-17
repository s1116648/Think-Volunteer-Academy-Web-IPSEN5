import { Injectable } from "@angular/core";
import { Test } from "../model/test.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root",
})
export class TestService {
	constructor(private http: HttpClient) {}

	getTestByID(id: string): Observable<Test> {
		return this.http.get<Test>(`/tests/${id}`);
	}
}
