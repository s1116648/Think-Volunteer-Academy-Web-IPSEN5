import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PlaceholderDirective } from "./placeholder.directive";
import { ModalComponent } from "./modals/modal/modal.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { DropdownOptionDirective } from "./dropdown/dropdown-option.directive";
import { DropdownSelectedDirective } from "./dropdown/dropdown-selected.directive";
import { TruncatePipe } from "./truncate.pipe";
import { PadStartPipe } from "./pad-start.pipe";
import { GeneralCourseInfoComponent } from "./general-course-info/general-course-info.component";
import { ToggleComponent } from "./toggle/toggle.component";
import { FormsModule } from "@angular/forms";
import { AdminSideNavComponent } from "./admin-side-nav/admin-side-nav.component";
import { ProgressCircleComponent } from "./progress-circle/progress-circle.component";
import { RouterModule } from "@angular/router";
import { TopNavComponent } from "./top-nav/top-nav.component";
import { CourseBannerUploaderComponent } from "./course-banner-uploader/course-banner-uploader.component";
import { ConfirmModalComponent } from "./modals/confirm-modal/confirm-modal.component";
import { AvatarComponent } from "./avatar/avatar.component";
import { CourseProgressionBannerComponent } from "./course-progression-banner/course-progression-banner.component";
import { MyCoachCardComponent } from "./my-coach-card/my-coach-card.component";

@NgModule({
	declarations: [
		DropdownComponent,
		DropdownOptionDirective,
		DropdownSelectedDirective,
		ProgressCircleComponent,
		TruncatePipe,
		PadStartPipe,
		GeneralCourseInfoComponent,
		ToggleComponent,
		AdminSideNavComponent,
		ModalComponent,
		ConfirmModalComponent,
		PlaceholderDirective,
		TopNavComponent,
		PlaceholderDirective,
		ModalComponent,
		CourseBannerUploaderComponent,
		AvatarComponent,
		CourseProgressionBannerComponent,
		MyCoachCardComponent
	],
	imports: [CommonModule, FontAwesomeModule, FormsModule, RouterModule],
	exports: [
		AdminSideNavComponent,
		DropdownComponent,
		DropdownOptionDirective,
		DropdownSelectedDirective,
		GeneralCourseInfoComponent,
		ModalComponent,
		ConfirmModalComponent,
		ModalComponent,
		PadStartPipe,
		PlaceholderDirective,
		PlaceholderDirective,
		ProgressCircleComponent,
		ToggleComponent,
		TopNavComponent,
		TruncatePipe,
		CourseBannerUploaderComponent,
		AvatarComponent,
		CourseProgressionBannerComponent,
		MyCoachCardComponent
	],
})
export class SharedModule {}
