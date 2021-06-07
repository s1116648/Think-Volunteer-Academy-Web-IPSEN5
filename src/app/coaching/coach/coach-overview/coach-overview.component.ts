import { Component, OnInit, ViewChild } from "@angular/core";
import { CoachService } from "../coach.service";
import { Coach } from "../coach.model";
import { Role } from "../../../role/role.model";
import { SetRoleModalComponent } from "../../../role/modals/set-role-modal/set-role-modal.component";
import { ModalService } from "../../../shared/modal.service";
import { PlaceholderDirective } from "../../../shared/placeholder.directive";
import { AddCoachModalComponent } from "../modals/add-coach-modal/add-coach-modal.component";
import { AddStudentModalComponent } from "../modals/add-student-modal/add-student-modal.component";

@Component({
  selector: "app-coach-overview",
  templateUrl: "./coach-overview.component.html",
  styleUrls: ["./coach-overview.component.scss"]
})
export class CoachOverviewComponent implements OnInit {
  @ViewChild(PlaceholderDirective, { static: false })
  modalHost: PlaceholderDirective;

  coaches: Coach[];

  constructor(
      private coachService: CoachService,
      private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.coachService.getCoaches().subscribe((coaches: Coach[]) => {
      this.coaches = coaches;
      console.log(coaches);
    });
  }

  openAddStudentModal(coach: Coach): void {
    const modal = this.modalService.createModal(
        AddStudentModalComponent,
        this.modalHost
    );
    modal.instance.coach = coach;
  }

  createCoach(): void{
    this.coachService.getCoaches().subscribe((coaches: Coach[]) => {
      this.coaches = coaches;
    });
  }
}
