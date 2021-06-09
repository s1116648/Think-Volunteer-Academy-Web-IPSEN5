import { Permission } from "./permission/permission.model";

export interface Role {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  permissions: Permission[];
}
