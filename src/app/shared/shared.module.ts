import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
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
import { RouterModule } from "@angular/router";

@NgModule({
	declarations: [
		DropdownComponent,
		DropdownOptionDirective,
		DropdownSelectedDirective,
		TruncatePipe,
		PadStartPipe,
		GeneralCourseInfoComponent,
		ToggleComponent,
		AdminSideNavComponent,
	],
	imports: [CommonModule, FontAwesomeModule, FormsModule, RouterModule],
	exports: [
		DropdownComponent,
		DropdownOptionDirective,
		DropdownSelectedDirective,
		TruncatePipe,
		PadStartPipe,
		GeneralCourseInfoComponent,
		ToggleComponent,
		AdminSideNavComponent,
	],
})
export class SharedModule {}
