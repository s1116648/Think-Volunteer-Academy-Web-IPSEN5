import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpPaginatedResult } from "../shared/http-paginated-result";
import { Chat } from "./chat.model";

@Injectable({
	providedIn: "root",
})
export class ChatService {
	constructor(private http: HttpClient) {}

	get(userID: string): Observable<HttpPaginatedResult<Chat>> {
		return this.http.get<HttpPaginatedResult<Chat>>(
			`/users/${userID}/chats`
		);
	}

	getByID(chatID: string): Observable<Chat> {
		return this.http.get<Chat>(`/chats/${chatID}`);
	}
}
