import { Component, Input, OnInit, Output, EventEmitter} from "@angular/core";
import { User } from "../user.model";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { AuthService } from "../../auth/auth.service";

@Component({
	selector: "app-user-row",
	templateUrl: "./user-row.component.html",
	styleUrls: ["./user-row.component.scss"],
})
export class UserRowComponent implements OnInit {
	@Input() user: User;
	@Output() updateUserRole = new EventEmitter<User>();
	@Output() removeButtonClickedEvent = new EventEmitter<User>();

	icons = {
		faTrash, faPen
	};

	constructor(private authService: AuthService) {}

	ngOnInit(): void {}

	remove = (): void => this.removeButtonClickedEvent.emit(this.user);

	openEditRoleModal = (): void => this.updateUserRole.emit(this.user);

	isCurrentUser = (user: User): boolean => this.authService.loginInfo.getValue().user.id === user.id;
}
