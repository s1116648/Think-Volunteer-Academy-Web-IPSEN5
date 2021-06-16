import { Component, OnInit } from "@angular/core";
import { StudentService } from "../student/student.service";
import { AuthService } from "../../auth/auth.service";
import { Student } from "../student/student.model";
import { CoachService } from "../coach/coach.service";
import { Chat } from "../../chat/chat.model";
import { HttpPaginatedResult } from "../../shared/http-paginated-result";
import { ChatService } from "../../chat/chat.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-my-students",
	templateUrl: "./my-students.component.html",
	styleUrls: ["./my-students.component.scss"]
})
export class MyStudentsComponent implements OnInit {
	students: Student[] = [];
	chats: Chat[] = [];

	constructor(
		private coachService: CoachService,
		private studentService: StudentService,
		private authService: AuthService,
		private chatService: ChatService,
		private router: Router) {
	}

	ngOnInit(): void {
		this.coachService.getCoachByUserId(this.authService.loginInfo.getValue().user.id).subscribe(
			(coach) => {
				this.studentService.getStudentsByCoach(coach.id).subscribe(
					(students) => {
						this.students = students;
					});
				this.chatService
					.get(coach.user.id)
					.subscribe((result: HttpPaginatedResult<Chat>) => {
						this.chats = result.items;
					});
			}
		);
	}

	onOpenChat(student: Student): void {
		for (const chat of this.chats) {
			if (chat.user2.id === student.user.id) {
				this.router.navigate(["chats", chat.id]);
			}
		}
	}
}
