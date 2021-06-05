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

@Component({
  selector: "app-set-role-modal",
  templateUrl: "./set-role-modal.component.html",
  styleUrls: ["./set-role-modal.component.scss"],
})
export class SetRoleModalComponent implements OnInit, Modal {

  constructor(
    private roleService: RoleService,
    private permissionService: PermissionService
  ) {}
  @Output() closeModal = new EventEmitter();
  @Output() set = new EventEmitter<Role>();

  @Input() role?: Role;

  icons = { faCheck };
  permissions: PermissionCheckbox[];
  selectedPermissions: PermissionCheckbox[];

  ngOnInit(): void {
    const permissionStrings = this.role?.permissions.map(permission => permission.name) ?? [];
    this.permissionService.fetchPermissions().subscribe((permissions: Permission[]) => {
      this.permissions = permissions.map(permission => {
        return { name: permission.name, isChecked: permissionStrings.includes(permission.name) };
      });
    });
  }

  fetchSelectedItems(): void {
    this.selectedPermissions = this.permissions.filter((value, index) => {
      return value.isChecked;
    });
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
          this.set.emit(role);
        });
  }

  update(form: NgForm): void {
    const values = form.value;

    console.log("I have depression");

    const roleDTO: UpdateRoleDTO = {
      name: values.name,
      description: values.description,
      permissions: this.selectedPermissions.map(permission => permission.name)
    };

    this.roleService
        .update(this.role.id, roleDTO)
        .subscribe((role: Role) => {
          this.set.emit(role);
        });
  }

  close = (): void => this.closeModal.emit();
}
