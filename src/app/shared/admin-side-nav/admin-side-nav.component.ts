import { Component, OnInit } from "@angular/core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: "app-admin-side-nav",
	templateUrl: "./admin-side-nav.component.html",
	styleUrls: ["./admin-side-nav.component.scss"],
})
export class AdminSideNavComponent implements OnInit {
	icons = { faChevronRight };

	constructor() {}

	ngOnInit(): void {}
}
