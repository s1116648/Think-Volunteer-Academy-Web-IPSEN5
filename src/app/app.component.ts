import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "./auth/auth.service";
import { LoginInfo } from "./auth/dto/login-info.dto";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
	private isLoggedIn = false;
	private loginInfoSubscription: Subscription;

	constructor(private authService: AuthService) {}

	ngOnInit(): void {
		this.authService.autoLogin();
		this.loginInfoSubscription = this.authService.loginInfo.subscribe(
			(loginInfo: LoginInfo) => (this.isLoggedIn = loginInfo != null)
		);
	}

	ngOnDestroy(): void {
		this.loginInfoSubscription.unsubscribe();
	}
}
