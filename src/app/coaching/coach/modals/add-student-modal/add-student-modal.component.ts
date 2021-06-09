import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Modal } from "../../../../shared/modals/modal.interface";
import { Coach } from "../../coach.model";
import { StudentService } from "../../../student/student.service";
import { Student } from "../../../student/student.model";
import { UserService } from "../../../../user/user.service";
import { User } from "../../../../user/user.model";

@Component({
  selector: "app-add-student-modal",
  templateUrl: "./add-student-modal.component.html",
  styleUrls: ["./add-student-modal.component.scss"]
})
export class AddStudentModalComponent implements OnInit, Modal {
  @Output() closeModal = new EventEmitter();

  @Input() coach: Coach;

  newStudents: User[] = [];
  possibleStudents: User[] = [];

  constructor(private studentService: StudentService, private userService: UserService) { }

  ngOnInit(): void {
    this.studentService.getUnassignedStudents().subscribe((users) => {
        this.possibleStudents = users;
    });
  }

  setNewStudents(e, student: User): void {
    if (e.currentTarget.checked){
      this.newStudents.push(student);
    }
    else{
      this.newStudents = this.newStudents.filter((arrayStudent: User) => {
        return arrayStudent.id !== student.id;
      });
    }
  }



  close = (): void => this.closeModal.emit();
}
