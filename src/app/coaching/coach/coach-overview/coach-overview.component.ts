import { Component, OnInit, ViewChild } from "@angular/core";
import { CoachService } from "../coach.service";
import { Coach } from "../coach.model";
import { ModalService } from "../../../shared/modal.service";
import { PlaceholderDirective } from "../../../shared/placeholder.directive";
import { AddStudentModalComponent } from "../modals/add-student-modal/add-student-modal.component";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { AddCoachModalComponent } from "../modals/add-coach-modal/add-coach-modal.component";

@Component({
  selector: "app-coach-overview",
  templateUrl: "./coach-overview.component.html",
  styleUrls: ["./coach-overview.component.scss"]
})
export class CoachOverviewComponent implements OnInit {
  @ViewChild(PlaceholderDirective, { static: false })
  modalHost: PlaceholderDirective;

  icons = { faPlus };
  coaches: Coach[] = [];

  constructor(
      private coachService: CoachService,
      private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.coachService.getCoaches().subscribe((coaches: Coach[]) => {
      this.coaches = coaches;
    });
  }

  createCoach(): void{
    this.coachService.getCoaches().subscribe((coaches: Coach[]) => {
      this.coaches = coaches;
    });
  }

  openAddCoachModal(): void {
    const modal = this.modalService.createModal(
        AddCoachModalComponent,
        this.modalHost
    );
    modal.instance.set.subscribe((coach) => this.coaches.push(coach));
  }

  openAddStudentModal(coach: Coach): void {
    const modal = this.modalService.createModal(
        AddStudentModalComponent,
        this.modalHost
    );
    modal.instance.coach = coach;
  }

  removeCoach(coach: Coach): void {
    this.coachService.delete(coach.id).subscribe(() => {
      const index = this.coaches.findIndex( c => c.id === coach.id);
      this.coaches.splice(index, 1);
    });
  }
}
