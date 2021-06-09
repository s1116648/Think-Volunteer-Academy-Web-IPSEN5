import { Component, Input, OnInit, Output, EventEmitter} from "@angular/core";
import { User } from "../user.model";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { UserService } from "../user.service";

@Component({
	selector: "app-user-row",
	templateUrl: "./user-row.component.html",
	styleUrls: ["./user-row.component.scss"],
})
export class UserRowComponent implements OnInit {
	@Input() user: User;
	@Output() removeButtonClickedEvent = new EventEmitter<User>();

	icons = {
		faTrash
	};

	constructor() {}

	ngOnInit(): void {}

	remove(): void {
		this.removeButtonClickedEvent.emit(this.user);
	}
}
