import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Modal } from "src/app/shared/modals/modal.interface";
import { Role } from "../../role.model";
import { RoleService } from "../../role.service";
import { PermissionService } from "../../permission/permission.service";
import { NgForm } from "@angular/forms";
import { CreateRoleDTO } from "../../dto/create-role-dto";
import { UpdateRoleDTO } from "../../dto/update-role-dto";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { PermissionCheckbox } from "../../permission/permission-checkbox.model";
import { Permission } from "../../permission/permission.model";
import { HttpErrorResponse } from "@angular/common/http";
import { NotifierService } from "angular-notifier";

@Component({
    selector: "app-set-role-modal",
    templateUrl: "./set-role-modal.component.html",
    styleUrls: ["./set-role-modal.component.scss"],
})
export class SetRoleModalComponent implements OnInit, Modal {

    constructor(
        private roleService: RoleService,
        private permissionService: PermissionService,
        private notifierService: NotifierService
    ) {}
    @Output() closeModal = new EventEmitter();
    @Output() set = new EventEmitter<Role>();

    @Input() role?: Role;

    icons = { faCheck };
    permissions: PermissionCheckbox[] = [];

    get AllPermissionsAreSelected(): boolean {
        return this.permissions.every(permission => !permission.isChecked);
    }

    get selectedPermissions(): PermissionCheckbox[] {
        return this.permissions.filter(permission => permission.isChecked);
    }

    ngOnInit(): void {
        const permissionStrings = this.role?.permissions.map(permission => permission.name) ?? [];
        this.permissionService.fetchPermissions().subscribe((permissions: Permission[]) => {
            this.permissions = permissions.map(permission => {
                return {
                    name: permission.name,
                    description: permission.description,
                    isChecked: permissionStrings.includes(permission.name),
                    createdAt: permission.createdAt,
                    updatedAt: permission.updatedAt
                };
            });
        });
    }

    selectAll(select: boolean): void {
        this.permissions.forEach(permission => permission.isChecked = select);
    }

    create(form: NgForm): void {
        const values = form.value;

        const roleDTO: CreateRoleDTO = {
            name: values.name,
            description: values.description,
            permissions: this.selectedPermissions.map(permission => permission.name)
        };

        this.roleService
            .create(roleDTO)
            .subscribe((role: Role) => {
                this.notifierService.notify("success", "Role created.");
                this.set.emit(role);
            }, () => {
                this.notifierService.notify("error", "An error occurred while creating role.");
            });
    }

    update(form: NgForm): void {
        const values = form.value;

        const tempPermissions: string[] = this.selectedPermissions.map(permission => permission.name) || [];

        const roleDTO: UpdateRoleDTO = {
            name: values.name,
            description: values.description,
            permissions: tempPermissions
        };

        this.roleService
            .update(this.role.id, roleDTO)
            .subscribe((role: Role) => {
                this.role.permissions = this.selectedPermissions.map(permission => {
                    return {
                        name: permission.name,
                        description: permission.description,
                        createdAt: permission.createdAt,
                        updatedAt: permission.updatedAt
                    };
                });
                this.notifierService.notify("success", "Role updated.");
                this.set.emit(role);
                this.close();
            }, () => {
                this.notifierService.notify("error", "An error occurred while updating role.");
            });
    }

    close = (): void => this.closeModal.emit();
}
