import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpPaginatedResult } from "../shared/http-paginated-result";
import { ChatMessage } from "./chat-message.model";
import { CreateChatMessageDTO } from "./dto/create-chat-message.dto";

@Injectable({
	providedIn: "root",
})
export class ChatMessageService {
	constructor(private http: HttpClient) {}

	get(chatID: string): Observable<HttpPaginatedResult<ChatMessage>> {
		return this.http.get<HttpPaginatedResult<ChatMessage>>(
			`/chats/${chatID}/messages`
		);
	}

	create(chatID: string, dto: CreateChatMessageDTO): Observable<ChatMessage> {
		return this.http.post<ChatMessage>(`/chats/${chatID}/messages`, dto);
	}
}
