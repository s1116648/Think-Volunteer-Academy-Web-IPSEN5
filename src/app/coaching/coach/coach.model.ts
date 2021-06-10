import { User } from "../../user/user.model";

export interface Coach {
	id: string;
	user: User;
	createdAt: Date;
	updatedAt: Date;
}
