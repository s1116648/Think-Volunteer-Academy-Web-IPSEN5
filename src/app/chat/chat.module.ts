import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { ChatComponent } from "./chat/chat.component";
import { RouterModule } from "@angular/router";
import { ChatRoutingModule } from "./chat-routing.module";
import { UserModule } from "../user/user.module";
import { ChatWindowComponent } from "./chat-window/chat-window.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FormsModule } from "@angular/forms";

@NgModule({
	declarations: [ChatComponent, ChatWindowComponent],
	imports: [
		CommonModule,
		SharedModule,
		RouterModule,
		ChatRoutingModule,
		UserModule,
		FontAwesomeModule,
		FormsModule,
	],
})
export class ChatModule {}
