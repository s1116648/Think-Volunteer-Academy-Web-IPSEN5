import { EventEmitter, Component, Input, OnInit, Output } from "@angular/core";
import { Role } from "../role.model";
import { faPen } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: "app-role-row",
	templateUrl: "./role-row.component.html",
	styleUrls: ["./role-row.component.scss"],
})
export class RoleRowComponent implements OnInit {
	icons = { faPen };

	@Input() role: Role;
	@Output() editButtonClickedEvent = new EventEmitter<Role>();
	constructor() {}

	ngOnInit(): void {}

	open(): void {
		this.editButtonClickedEvent.emit(this.role);
	}
}
