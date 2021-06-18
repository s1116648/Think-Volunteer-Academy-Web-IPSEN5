import { User } from "../user/user.model";

export interface Chat {
	id: string;
	user1: User;
	user2: User;
	createdAt: Date;
	updatedAt: Date;
}
