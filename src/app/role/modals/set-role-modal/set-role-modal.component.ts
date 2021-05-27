import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Modal } from "src/app/shared/modals/modal.interface";
import { Role } from "../../role.model";
import { RoleService } from "../../role.service";
import { Permission } from "../../permission/permission.model";
import { PermissionService } from "../../permission/permission.service";

@Component({
  selector: "app-set-role-modal",
  templateUrl: "./set-role-modal.component.html",
  styleUrls: ["./set-role-modal.component.scss"],
})
export class SetRoleModalComponent implements OnInit, Modal {
  @Output() closeModal = new EventEmitter();
  @Output() set = new EventEmitter<Partial<Role>>();

  @Input() role?: Role;

  permissions: Permission[];

  constructor(
    private roleService: RoleService,
    private permissionService: PermissionService
  ) {}

  ngOnInit(): void {
    this.permissions = this.permissionService.fetchMock();
  }

  close = (): void => this.closeModal.emit();
}
