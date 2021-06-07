import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpPaginatedResult } from "../shared/http-paginated-result";
import { CreateLessonAttachmentDTO } from "./dto/create-lesson-attachment.dto";
import { LessonAttachment } from "./lesson-attachment.model";

@Injectable({
	providedIn: "root",
})
export class LessonAttachmentService {
	constructor(private http: HttpClient) {}

	get(lessonID: string): Observable<HttpPaginatedResult<LessonAttachment>> {
		return this.http.get<HttpPaginatedResult<LessonAttachment>>(
			`/lessons/${lessonID}/attachments`
		);
	}

	create(
		lessonID: string,
		dto: CreateLessonAttachmentDTO
	): Observable<LessonAttachment> {
		return this.http.post<LessonAttachment>(
			`/lessons/${lessonID}/attachments`,
			dto
		);
	}

	remove(lessonID: string, attachmentID: string): Observable<null> {
		return this.http.delete<null>(
			`/lessons/${lessonID}/attachments/${attachmentID}`
		);
	}

	getAttachmentUrl(attachmentID: string): any {
		return this.http.get(`/attachments/${attachmentID}/url`);
	}
}
