import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Role } from "../../../../role/role.model";
import { Modal } from "../../../../shared/modals/modal.interface";
import { Coach } from "../../coach.model";
import { StudentService } from "../../../student/student.service";

@Component({
  selector: "app-add-student-modal",
  templateUrl: "./add-student-modal.component.html",
  styleUrls: ["./add-student-modal.component.scss"]
})
export class AddStudentModalComponent implements OnInit, Modal {
  @Output() closeModal = new EventEmitter();
  @Output() set = new EventEmitter<Role>();

  @Input() coach: Coach;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {

  }

  close = (): void => this.closeModal.emit();
}
