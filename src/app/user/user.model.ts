import { Role } from "../role/role.model";

export interface User {
	id: string;
	firstname: string;
	lastname: string;
	email: string;
	role?: Role;
	createdAt: Date;
	updatedAt: Date;
}
