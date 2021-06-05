import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { APIInterceptor } from "./shared/api.interceptor";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { LessonModule } from "./lesson/lesson.module";
import { AuthModule } from "./auth/auth.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { RoleModule } from "./role/role.module";
import { UserModule } from "./user/user.module";
import { CourseModule } from "./course/course.module";
import { FormsModule } from "@angular/forms";
import { CourseCategoryModule } from "./course-category/course-category.module";
import { ManageModule } from "./manage/manage.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		LessonModule,
		FontAwesomeModule,
		AuthModule,
		AppRoutingModule,
		CourseModule,
		FormsModule,
		CourseCategoryModule,
		RoleModule,
		ManageModule,
		UserModule,
		SharedModule,
	],
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
