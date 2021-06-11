import { Component, OnInit, ViewChild } from "@angular/core";
import { UserService } from "../user.service";
import { User } from "../user.model";
import { ModalService } from "../../shared/modal.service";
import { ConfirmModalComponent } from "../../shared/modals/confirm-modal/confirm-modal.component";
import { PlaceholderDirective } from "../../shared/placeholder.directive";
import { SetUserRoleComponent } from "../modals/set-user-role/set-user-role.component";
import { UserRowComponent} from "../user-row/user-row.component";

@Component({
	selector: "app-user-overview",
	templateUrl: "./user-overview.component.html",
	styleUrls: ["./user-overview.component.scss"],
})
export class UserOverviewComponent implements OnInit {
	@ViewChild(PlaceholderDirective, { static: false })
	modalHost: PlaceholderDirective;

	users: User[] = [];

	constructor(
		private userService: UserService,
		private modalService: ModalService
	) {}

	ngOnInit(): void {
		this.userService.fetchUsers().subscribe((users: User[]) => {
			this.users = users;
		});
	}

	showRemoveUserModal(user: User): void {
		const modal = this.modalService.createModal(ConfirmModalComponent, this.modalHost);
		modal.instance.description = "This action can <b>not</b> be reverted!";

		modal.instance.confirmed.subscribe(() => {
			this.userService.delete(user.id).subscribe(() => {
				const index = this.users.findIndex((u) => u.id === user.id);
				this.users.splice(index, 1);
			}, (err) => {
				console.error(err);
			});
		});
	}

	openSetRoleModal(user: User): void {
		const modal = this.modalService.createModal(
			SetUserRoleComponent,
			this.modalHost
		);
		modal.instance.user = user;
		modal.instance.set.subscribe((newUser: User) => {
			const index = this.users.findIndex( u => u.id === user.id);
			this.users.splice(index, 1);
			this.users.push(newUser);
		});
	}
}
