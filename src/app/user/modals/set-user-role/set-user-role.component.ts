import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { RoleService } from "../../../role/role.service";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { UserService } from "../../user.service";
import { User } from "../../user.model";
import { NgForm } from "@angular/forms";
import { Role } from "../../../role/role.model";

@Component({
  selector: "app-set-user-role",
  templateUrl: "./set-user-role.component.html",
  styleUrls: ["./set-user-role.component.scss"]
})
export class SetUserRoleComponent implements OnInit {
  roles: Role[];

  constructor(
      private roleService: RoleService,
      private userService: UserService
  ) {}

  @Output() closeModal = new EventEmitter();

  @Input() user?: User;

  icons = { faCheck };

  ngOnInit(): void {
    this.roleService.fetchRoles().subscribe((roles) => {
      this.roles = roles;
    });
  }

  setRole(userRoleForm: NgForm): void {
    const values = userRoleForm.value;


  }

  close = (): void => this.closeModal.emit();
}
