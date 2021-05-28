import { Component, OnInit, ViewChild } from "@angular/core";
import { Role } from "./role.model";
import { RoleService } from "./role.service";
import { PlaceholderDirective } from "../shared/placeholder.directive";
import { ModalService } from "../shared/modal.service";
import { SetRoleModalComponent } from "./modals/set-role-modal/set-role-modal.component";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: "app-role",
	templateUrl: "./role.component.html",
	styleUrls: ["./role.component.scss"],
})
export class RoleComponent implements OnInit {
	icons = { faPlus };

	@ViewChild(PlaceholderDirective, { static: false })
	modalHost: PlaceholderDirective;

	roles: Role[];

	constructor(
		private roleService: RoleService,
		private modalService: ModalService
	) {}

	ngOnInit(): void {
		this.roles = this.roleService.fetchNonReal();
	}

	openEditRoleModal(role: Role): void {
		const modal = this.modalService.createModal(
			SetRoleModalComponent,
			this.modalHost
		);
		modal.instance.role = role;
	}

	openNewRoleModal(): void {
		const modal = this.modalService.createModal(
			SetRoleModalComponent,
			this.modalHost
		);
		modal.instance.role = null;
	}
}
