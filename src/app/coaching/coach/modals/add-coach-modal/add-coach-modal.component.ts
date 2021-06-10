import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Student } from "../../../student/student.model";
import { StudentService } from "../../../student/student.service";
import { User } from "../../../../user/user.model";
import { NgForm } from "@angular/forms";
import { CoachService } from "../../coach.service";
import { Coach } from "../../coach.model";

@Component({
  selector: "app-add-coach-modal",
  templateUrl: "./add-coach-modal.component.html",
  styleUrls: ["./add-coach-modal.component.scss"]
})
export class AddCoachModalComponent implements OnInit {
  icons = { faCheck };

  @Output() closeModal = new EventEmitter();
  @Output() set = new EventEmitter<Coach>();

  possibleCoaches: User[] = [];

  constructor(
      private studentService: StudentService,
      private coachService: CoachService
  ) { }

  ngOnInit(): void {
    this.studentService.getUnassignedStudents().subscribe((users) => {
      this.possibleCoaches = users;
    });
  }

  close = (): void => this.closeModal.emit();

  addCoach(coachForm: NgForm): void {
    const values = coachForm.value;
    this.coachService.create(values.coach).subscribe((coach: Coach) => {
      this.set.emit(coach);
      this.close();
    });
  }
}
