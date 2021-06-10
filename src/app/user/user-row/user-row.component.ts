import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { User } from "../user.model";
import { faPen } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: "app-user-row",
	templateUrl: "./user-row.component.html",
	styleUrls: ["./user-row.component.scss"],
})
export class UserRowComponent implements OnInit {
	@Input() user: User;
	@Output() updateUserRole = new EventEmitter<User>();
	constructor() {}

	icons = { faPen };

	ngOnInit(): void {}

	openEditRoleModal(): void {
		this.updateUserRole.emit(this.user);
	}
}
