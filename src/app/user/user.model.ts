import { Role } from "../role/role.model";

export interface User {
	id: string;
	firstname: string;
	lastname: string;
	email: string;
	avatar: string;
	role?: Role;
	createdAt: Date;
	updatedAt: Date;
}
