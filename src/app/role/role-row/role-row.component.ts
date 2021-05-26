import { EventEmitter, Component, Input, OnInit, Output, ViewChild } from "@angular/core";
import { Role } from "../role.model";
import { ModalService } from "../../shared/modal.service";
import { SetRoleModalComponent } from "../modals/set-role-modal/set-role-modal.component";
import { PlaceholderDirective } from "../../shared/placeholder.directive";

@Component({
  selector: "app-role-row",
  templateUrl: "./role-row.component.html",
  styleUrls: ["./role-row.component.scss"]
})
export class RoleRowComponent implements OnInit {
  @Input() role: Role;
  @Output() editButtonClickedEvent = new EventEmitter<Role>();
  constructor() { }

  ngOnInit(): void {
  }

  open(): void {
    this.editButtonClickedEvent.emit(this.role);
  }
}
