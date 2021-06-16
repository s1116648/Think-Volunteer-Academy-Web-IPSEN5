import { Injectable } from "@angular/core";
import {Test} from "../models/test.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {UpdateTestDTO} from "../dto/update-test.dto";

@Injectable({
	providedIn: "root",
})
export class TestService {

	constructor(private http: HttpClient) {
	}

	getTestByID(id: string): Observable<Test> {
		return this.http.get<Test>(`/tests/${id}`);
	}

	update(id: string, dto: UpdateTestDTO): Observable<Test> {
		return this.http.patch<Test>(`/tests/${id}`, dto);
	}

}
