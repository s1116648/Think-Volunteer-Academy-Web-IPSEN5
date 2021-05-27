import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserOverviewComponent } from "./user-overview/user-overview.component";
import { UserRowComponent } from "./user-row/user-row.component";



@NgModule({
  declarations: [UserOverviewComponent, UserRowComponent],
  exports: [
    UserOverviewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
