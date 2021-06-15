import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { RoleService } from "../../../role/role.service";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { UserService } from "../../user.service";
import { User } from "../../user.model";
import { NgForm } from "@angular/forms";
import { Role } from "../../../role/role.model";
import { UpdateUserRoleDTO} from "../../dto/update-user-role.dto";
import { AuthService } from "../../../auth/auth.service";

@Component({
  selector: "app-set-user-role",
  templateUrl: "./set-user-role.component.html",
  styleUrls: ["./set-user-role.component.scss"]
})
export class SetUserRoleComponent implements OnInit {
  @Output() set = new EventEmitter<User>();

  roles: Role[];

  constructor(
      private authService: AuthService,
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
    const updateUserRoleDTO: UpdateUserRoleDTO = {
      role: values.role.id
    };
    this.userService.setUserRole(this.user.id, updateUserRoleDTO).subscribe((user) => {
      this.authService.handleAuthentication({
        ...this.authService.loginInfo.getValue(),
        user
      });
      this.set.emit(user);
      this.close();
    });
  }

  close = (): void => this.closeModal.emit();
}
