import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Modal } from "../../../../shared/modals/modal.interface";
import { Coach } from "../../coach.model";
import { StudentService } from "../../../student/student.service";
import { Student } from "../../../student/student.model";
import { UserService } from "../../../../user/user.service";
import { User } from "../../../../user/user.model";
import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import { forkJoin, Observable } from "rxjs";

@Component({
  selector: "app-add-student-modal",
  templateUrl: "./add-student-modal.component.html",
  styleUrls: ["./add-student-modal.component.scss"]
})
export class AddStudentModalComponent implements OnInit, Modal {
  icons = { faCheck };

  @Output() closeModal = new EventEmitter();
  @Output() set = new EventEmitter<Student[]>();
  @Input() coach: Coach;

  isTransferring: boolean = false;

  newStudents: User[] = [];
  students: Student[] = [];
  possibleStudents: User[] = [];

  constructor(
      private studentService: StudentService,
      private userService: UserService
  ) { }

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

  saveNewStudents(): void{
    this.isTransferring = true;

    const studentToCoachObservables: Observable<Student>[] = [];
    this.newStudents.forEach((student) => {
      const observable = this.studentService.addStudentToCoach(this.coach.id, student.id);
      studentToCoachObservables.push(observable);
    });
    forkJoin(studentToCoachObservables).subscribe((students: Student[]) => {
      this.set.emit(students);
      this.studentService.addedStudentsToCoach.next(students);
      this.close();
    });
  }

  close = (): void => this.closeModal.emit();
}
