import { Component, OnInit } from "@angular/core";
import { StudentService } from "../student/student.service";
import { AuthService } from "../../auth/auth.service";
import { Student } from "../student/student.model";
import { Coach } from "../coach/coach.model";
import { CoachService } from "../coach/coach.service";

@Component({
	selector: "app-my-students",
	templateUrl: "./my-students.component.html",
	styleUrls: ["./my-students.component.scss"]
})
export class MyStudentsComponent implements OnInit {
	students: Student[] = [];

	constructor(private coachService: CoachService, private studentService: StudentService, private authService: AuthService) {
	}

	ngOnInit(): void {
		this.coachService.getCoachByUserId(this.authService.loginInfo.getValue().user.id).subscribe(
			(coach) => {
				this.studentService.getStudentsByCoach(coach.id).subscribe(
					(students) => {
						this.students = students;
						console.log(students);
					});
			}
		);
	}

}
