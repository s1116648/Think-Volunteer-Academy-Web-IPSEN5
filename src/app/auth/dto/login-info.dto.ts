import { User } from "src/app/user/user.model";

export interface LoginInfo {
	user: User;
	token: string;
}
