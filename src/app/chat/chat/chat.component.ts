import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth/auth.service";
import { HttpPaginatedResult } from "src/app/shared/http-paginated-result";
import { User } from "src/app/user/user.model";
import { Chat } from "../chat.model";
import { ChatService } from "../chat.service";

@Component({
	selector: "app-chat",
	templateUrl: "./chat.component.html",
	styleUrls: ["./chat.component.scss"],
})
export class ChatComponent implements OnInit {
	chats: Chat[] = [];

	currentUser: User;

	currentChat: Chat;

	constructor(
		private chatService: ChatService,
		private authService: AuthService
	) {}

	ngOnInit(): void {
		this.currentUser = this.authService.loginInfo.getValue().user;
		this.chatService
			.get(this.currentUser.id)
			.subscribe((result: HttpPaginatedResult<Chat>) => {
				this.chats = result.items;
				this.currentChat = this.chats[0];
			});
	}

	getOtherUserOfChat(chat: Chat): User {
		return chat.user1.id === this.currentUser.id ? chat.user2 : chat.user1;
	}
}
