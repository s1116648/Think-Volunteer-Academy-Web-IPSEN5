import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { User } from "../user.model";

@Component({
	selector: "app-user-overview",
	templateUrl: "./user-overview.component.html",
	styleUrls: ["./user-overview.component.scss"],
})
export class UserOverviewComponent implements OnInit {
	users: User[];

	constructor(private userService: UserService) {}

	ngOnInit(): void {
		this.userService.fetchUsers().subscribe((users: User[]) => {
			this.users = users;
		});
	}
}
