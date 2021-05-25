import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { DropdownOptionDirective } from "./dropdown/dropdown-option.directive";
import { DropdownSelectedDirective } from "./dropdown/dropdown-selected.directive";
import { TruncatePipe } from "./truncate.pipe";
import { PadStartPipe } from "./pad-start.pipe";
import { GeneralCourseInfoComponent } from "./general-course-info/general-course-info.component";

@NgModule({
	declarations: [
		DropdownComponent,
		DropdownOptionDirective,
		DropdownSelectedDirective,
		TruncatePipe,
		PadStartPipe,
		GeneralCourseInfoComponent,
	],
	imports: [CommonModule, FontAwesomeModule],
	exports: [
		DropdownComponent,
		DropdownOptionDirective,
		DropdownSelectedDirective,
		TruncatePipe,
		PadStartPipe,
		GeneralCourseInfoComponent,
	],
})
export class SharedModule {}
