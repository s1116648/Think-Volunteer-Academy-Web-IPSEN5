import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UploadedFileResponse } from "./UploadedFileResponse.model";

@Injectable({
	providedIn: "root",
})
export class FileService {
	constructor(private http: HttpClient) {}

	upload(file: File): Observable<UploadedFileResponse> {
		const formData = new FormData();
		formData.append("file", file);

		return this.http
			.post<UploadedFileResponse[]>("/files", formData, {
				reportProgress: true,
			})
			.pipe(map((data: UploadedFileResponse[]) => data[0]));
	}
}
