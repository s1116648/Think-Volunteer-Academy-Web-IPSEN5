import { Injectable } from "@angular/core";
import { Test } from "../model/test.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { SubmitTestDTO } from "../dto/submit-test.dto";
import { TestResultModel } from "../model/test-result.model";

@Injectable({
	providedIn: "root",
})
export class TestService {
	constructor(private http: HttpClient) {}

	getTestByID(id: string): Observable<Test> {
		return this.http.get<Test>(`/tests/${id}`);
	}

	submitAnswers(testId: string, submitTestDto: SubmitTestDTO): Observable<TestResultModel> {
		return this.http.post<TestResultModel>(`/tests/${testId}/submit`, submitTestDto);
	}
}
