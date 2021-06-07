import { Component, Input, OnInit } from "@angular/core";
import { Student } from "../student.model";
import { StudentService } from "../student.service";
import { Coach } from "../../coach/coach.model";

@Component({
  selector: "app-student-overview",
  templateUrl: "./student-overview.component.html",
  styleUrls: ["./student-overview.component.scss"]
})
export class StudentOverviewComponent implements OnInit {
  @Input() coach: Coach;

  students: Student[];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudentsByCoach(this.coach.id).subscribe((students: Student[]) => {
      this.students = students;
    });
  }

}
