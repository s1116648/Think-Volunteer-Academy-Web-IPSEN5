import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Role } from "../../../../role/role.model";
import { Modal } from "../../../../shared/modals/modal.interface";
import { Coach } from "../../coach.model";
import { StudentService } from "../../../student/student.service";
import { Student } from "../../../student/student.model";

@Component({
  selector: "app-add-student-modal",
  templateUrl: "./add-student-modal.component.html",
  styleUrls: ["./add-student-modal.component.scss"]
})
export class AddStudentModalComponent implements OnInit, Modal {
  @Output() closeModal = new EventEmitter();

  @Input() coach: Coach;

  currentStudents: Student[];
  newStudents: Student[];
  possibleStudents: Student[];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudentsByCoach(this.coach.id).subscribe((students) => {
      console.log(students);
      this.currentStudents = students;
      this.newStudents = students;
    });

    this.studentService.getUnassignedStudents().subscribe((students) => {
      this.possibleStudents = students;
    });
  }

  addStudentClicked(): void{

  }

  removeStudentClicked(): void{

  }

  close = (): void => this.closeModal.emit();
}
