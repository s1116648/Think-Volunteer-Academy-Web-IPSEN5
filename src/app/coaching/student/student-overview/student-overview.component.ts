import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { Student } from "../student.model";
import { StudentService } from "../student.service";
import { Coach } from "../../coach/coach.model";
import { PlaceholderDirective } from "../../../shared/placeholder.directive";
import { Subscription } from "rxjs";

@Component({
  selector: "app-student-overview",
  templateUrl: "./student-overview.component.html",
  styleUrls: ["./student-overview.component.scss"]
})
export class StudentOverviewComponent implements OnInit {
  @ViewChild(PlaceholderDirective, { static: false })
  modalHost: PlaceholderDirective;

  @Input() coach: Coach;

  private newStudentSubscription: Subscription;
  students: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudentsByCoach(this.coach.id).subscribe((students: Student[]) => {
      this.students = students;
    });
    // tslint:disable-next-line:max-line-length
    this.newStudentSubscription = this.studentService.addedStudentsToCoach.subscribe((students: Student[]) => {
      this.students.push(...students.filter(student => student.coach.id === this.coach.id));
    });
  }

  removeFromCoach(student: Student): void {
    this.studentService.removeStudentFromCoach(student.coach.id, student.user.id).subscribe(() => {
      const index = this.students.findIndex(s => s.user.id === student.user.id);
      this.students.splice(index, 1);
    });
  }
}
