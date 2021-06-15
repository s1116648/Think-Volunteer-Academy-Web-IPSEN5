import { Component, OnInit } from "@angular/core";
import { StudentService } from "../student/student.service";
import { AuthService } from "../../auth/auth.service";
import { Student } from "../student/student.model";

@Component({
	selector: "app-my-students",
	templateUrl: "./my-students.component.html",
	styleUrls: ["./my-students.component.scss"]
})
export class MyStudentsComponent implements OnInit {
	students: Student[] = [];

	constructor(private studentService: StudentService, private authService: AuthService) {
	}

	ngOnInit(): void {
		const coachId = this.authService.loginInfo.getValue().user.id;
		this.studentService.getStudentsByCoach(coachId).subscribe(
			(students) => {
				this.students = students;
			});
	}

}
