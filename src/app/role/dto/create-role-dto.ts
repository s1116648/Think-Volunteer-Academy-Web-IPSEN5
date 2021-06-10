import { Permission } from "../permission/permission.model";

export interface CreateRoleDTO {
	name: string;
	description: string;
	permissions: string[];
}
