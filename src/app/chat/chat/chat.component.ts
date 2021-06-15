import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
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
		private authService: AuthService,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.currentUser = this.authService.loginInfo.getValue().user;

		this.route.params.subscribe((params: Params) => {
			this.chatService
				.get(this.currentUser.id)
				.subscribe((result: HttpPaginatedResult<Chat>) => {
					this.chats = result.items;
				});

			if (params.id) {
				this.chatService.getByID(params.id).subscribe((chat: Chat) => {
					this.currentChat = chat;
				});
			}
		});
	}

	getOtherUserOfChat(chat: Chat): User {
		return chat.user1.id === this.currentUser.id ? chat.user2 : chat.user1;
	}
}
