import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Modal } from "src/app/shared/modals/modal.interface";
import { Role } from "../../role.model";
import { RoleService } from "../../role.service";

@Component({
  selector: "app-set-role-modal",
  templateUrl: "./set-role-modal.component.html",
  styleUrls: ["./set-role-modal.component.scss"],
})
export class SetRoleModalComponent implements OnInit, Modal {
  @Output() closeModal = new EventEmitter();
  @Output() set = new EventEmitter<Partial<Role>>();

  @Input() role?: Role;

  constructor(private roleService: RoleService) {}

  ngOnInit(): void {}

  close = (): void => this.closeModal.emit();
}
