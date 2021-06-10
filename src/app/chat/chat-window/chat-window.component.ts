import { Component, Input, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth/auth.service";
import { User } from "src/app/user/user.model";
import { Chat } from "../chat.model";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { ChatMessageService } from "../chat-message.service";
import { ChatMessage } from "../chat-message.model";
import { HttpPaginatedResult } from "src/app/shared/http-paginated-result";
import { NgForm } from "@angular/forms";
import { CreateChatMessageDTO } from "../dto/create-chat-message.dto";

@Component({
	selector: "app-chat-window",
	templateUrl: "./chat-window.component.html",
	styleUrls: ["./chat-window.component.scss"],
})
export class ChatWindowComponent implements OnInit {
	@Input() chat: Chat;

	currentUser: User;
	chatUser: User;

	messages: ChatMessage[];

	message: string;

	icons = { faPaperPlane };

	constructor(
		private authService: AuthService,
		private chatMessageService: ChatMessageService
	) {}

	ngOnInit(): void {
		this.currentUser = this.authService.loginInfo.getValue().user;
		this.chatUser =
			this.chat.user1.id === this.currentUser.id
				? this.chat.user2
				: this.chat.user1;

		this.chatMessageService
			.get(this.chat.id)
			.subscribe((result: HttpPaginatedResult<ChatMessage>) => {
				this.messages = result.items;
			});
	}

	sendMessage(form: NgForm): void {
		const values = form.value;

		const dto: CreateChatMessageDTO = {
			message: values.message,
			sender: this.currentUser.id,
		};

		if (!values.message) return;

		this.chatMessageService
			.create(this.chat.id, dto)
			.subscribe((message: ChatMessage) => {
				this.messages.push(message);
				form.reset();
			});
	}

	isSender = (message: ChatMessage): boolean =>
		message.sender.id === this.currentUser.id;
}
