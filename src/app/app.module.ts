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
import { DragulaModule } from "ng2-dragula";
import { ChatModule } from "./chat/chat.module";
import { Ng2ImgMaxModule } from "ng2-img-max";
import { TestScreenComponent } from "./test/test-screen/test-screen.component";
import { TestScreenInfoComponent } from "./test/test-screen/test-info/test-screen-info.component";
import { QuestionComponent } from "./test/test-screen/question/question.component";
import { CoachingModule } from "./coaching/coaching.module";
import {TestModule} from "./test/test.module";

@NgModule({
	declarations: [AppComponent, TestScreenComponent, TestScreenInfoComponent, QuestionComponent],
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
		DragulaModule.forRoot(),
		ChatModule,
		Ng2ImgMaxModule,
		CoachingModule,
		TestModule
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
