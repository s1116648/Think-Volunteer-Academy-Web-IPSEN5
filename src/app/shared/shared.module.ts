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
import {ProgressCircleComponent} from "./progress-circle/progress-circle.component";
import { RouterModule } from "@angular/router";
import { TopNavComponent } from "./top-nav/top-nav.component";

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
		PlaceholderDirective,
		TopNavComponent,
    PlaceholderDirective,
    ModalComponent
	],
	imports: [CommonModule, FontAwesomeModule, FormsModule, RouterModule],
	exports: [
	  AdminSideNavComponent,
    DropdownComponent,
    DropdownOptionDirective,
    DropdownSelectedDirective,
    GeneralCourseInfoComponent,
    ModalComponent,
    ModalComponent,
    PadStartPipe,
    PlaceholderDirective,
    PlaceholderDirective,
    ProgressCircleComponent,
    ToggleComponent,
    TopNavComponent,
    TruncatePipe,
  ]
})
export class SharedModule {}
