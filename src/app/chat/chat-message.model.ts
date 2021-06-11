import { User } from "../user/user.model";

export interface ChatMessage {
	id: string;
	message: string;
	sender: User;
	createdAt: Date;
	updatedAt: Date;
}
