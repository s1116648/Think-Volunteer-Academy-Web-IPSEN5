import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PlaceholderDirective } from "./placeholder.directive";
import { ModalComponent } from "./modals/modal/modal.component";



@NgModule({
  declarations: [
    PlaceholderDirective,
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlaceholderDirective,
    ModalComponent
  ]
})
export class SharedModule { }
