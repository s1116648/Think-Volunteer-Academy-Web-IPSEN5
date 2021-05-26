import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { APIInterceptor } from "./shared/api.interceptor";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthModule } from "./auth/auth.module";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {UserModule} from "./user/user.module";

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, FontAwesomeModule, AuthModule, AppRoutingModule, UserModule],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: APIInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
