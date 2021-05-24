import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { DropdownOptionDirective } from "./dropdown/dropdown-option.directive";
import { DropdownSelectedDirective } from "./dropdown/dropdown-selected.directive";

@NgModule({
	declarations: [
		DropdownComponent,
		DropdownOptionDirective,
		DropdownSelectedDirective,
	],
	imports: [CommonModule, FontAwesomeModule],
	exports: [
		DropdownComponent,
		DropdownOptionDirective,
		DropdownSelectedDirective,
	],
})
export class SharedModule {}
