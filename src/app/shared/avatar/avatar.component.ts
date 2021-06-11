import { Component, Input, OnInit } from "@angular/core";

@Component({
	selector: "app-avatar",
	templateUrl: "./avatar.component.html",
	styleUrls: ["./avatar.component.scss"],
})
export class AvatarComponent implements OnInit {
	@Input() avatar: string;

	readonly defaultImage =
		"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png";

	get image(): string {
		console.log("image");
		return this.avatar ? this.avatar : this.defaultImage;
	}

	constructor() {}

	ngOnInit(): void {}
}
