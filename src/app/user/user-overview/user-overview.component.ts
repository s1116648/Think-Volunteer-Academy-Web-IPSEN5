import { Component, OnInit, ViewChild } from "@angular/core";
import { UserService } from "../user.service";
import { User } from "../user.model";
import { PlaceholderDirective } from "../../shared/placeholder.directive";
import { ModalService } from "../../shared/modal.service";
import { Role } from "../../role/role.model";
import { SetRoleModalComponent } from "../../role/modals/set-role-modal/set-role-modal.component";
import { SetUserRoleComponent } from "../modals/set-user-role/set-user-role.component";

@Component({
	selector: "app-user-overview",
	templateUrl: "./user-overview.component.html",
	styleUrls: ["./user-overview.component.scss"],
})
export class UserOverviewComponent implements OnInit {
	@ViewChild(PlaceholderDirective, { static: false })
	modalHost: PlaceholderDirective;

	users: User[];

	constructor(
		private userService: UserService,
		private modalService: ModalService
	) {}

	ngOnInit(): void {
		this.userService.fetchUsers().subscribe((users: User[]) => {
			this.users = users;
		});
	}

	openSetRoleModal(user: User): void {
		const modal = this.modalService.createModal(
			SetUserRoleComponent,
			this.modalHost
		);
		modal.instance.user = user;
	}
}
