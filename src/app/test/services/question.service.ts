import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CreateQuestionDTO} from "../dto/create-question.dto";
import {Observable, Subject} from "rxjs";
import {Question} from "../model/question.model";
import {HttpPaginatedResult} from "../../shared/http-paginated-result";
import {UpdateQuestionDTO} from "../dto/update-question.dto";

@Injectable({
    providedIn: "root",
})

export class QuestionService {
    questionsChanged = new Subject<Question[]>();
    questionsArray: Question[] = [];

    constructor(private http: HttpClient) {}

    getGlobalQuestionsArray(): Question[] {
        return this.questionsArray.slice();
    }

    updateGlobalQuestionsArray(questions: Question[]): void {
        this.questionsArray = questions;
        this.questionsChanged.next(this.questionsArray);
    }

    get(id: string): Observable<HttpPaginatedResult<Question>> {
        return this.http.get<HttpPaginatedResult<Question>>(`/questions/${id}`);
    }

    create(id: string, dto: CreateQuestionDTO): Observable<Question> {
        return this.http.post<Question>(`/tests/${id}/questions`, dto);
    }

    delete(id: string): Observable<void> {
        return this.http.delete<void>(`/questions/${id}`);
    }

    update(id: string, dto: UpdateQuestionDTO): Observable<Question> {
        return this.http.patch<Question>(`/questions/${id}`, dto);
    }
}
