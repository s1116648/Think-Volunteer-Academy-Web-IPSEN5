import { Permission } from "../permission/permission.model";

export interface UpdateRoleDTO {
	name: string;
	description: string;
	permissions: string[];
}
