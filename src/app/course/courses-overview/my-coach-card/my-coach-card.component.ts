import { Component, Input, OnInit } from "@angular/core";
import {
	faArrowRight,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Coach } from "../../../coaching/coach/coach.model";
import { ChatService } from "../../../chat/chat.service";
import { AuthService } from "../../../auth/auth.service";
import { HttpPaginatedResult } from "../../../shared/http-paginated-result";
import { Chat } from "../../../chat/chat.model";

@Component({
	selector: "app-my-coach-card",
	templateUrl: "./my-coach-card.component.html",
	styleUrls: ["my-coach-card.component.scss"],
})
export class MyCoachCardComponent implements OnInit {
	@Input() coach: Coach;
	chat: Chat;

	icons = {
		faArrowRight,
		faChevronRight,
	};

	constructor(private chatService: ChatService, private authService: AuthService) {}

	ngOnInit(): void {
		const user = this.authService.loginInfo.getValue().user;
		this.chatService.get(user.id).subscribe((result: HttpPaginatedResult<Chat>) => {
			const chats = result.items;
			this.chat = chats.find(chat => chat.user1.id === this.coach.user.id || chat.user2.id === this.coach.user.id);
		});
	}
}
