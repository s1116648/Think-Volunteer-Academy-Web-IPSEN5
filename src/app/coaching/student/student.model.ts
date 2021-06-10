import { User } from "../../user/user.model";
import { Coach } from "../coach/coach.model";

export interface Student {
	user: User;
	coach: Coach;
}
