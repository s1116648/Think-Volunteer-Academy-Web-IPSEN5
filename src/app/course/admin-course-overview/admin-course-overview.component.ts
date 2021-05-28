import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Course } from "../course.model";
import { CourseService } from "../course.service";
import { faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import { SetRoleModalComponent } from "../../role/modals/set-role-modal/set-role-modal.component";
import { ModalService } from "../../shared/modal.service";
import { PlaceholderDirective } from "../../shared/placeholder.directive";
import { SetLessonModalComponent } from "../../lesson/modals/set-lesson-modal/set-lesson-modal.component";
import { Lesson } from "../../lesson/lesson.model";

@Component({
	selector: "app-admin-course-overview",
	templateUrl: "./admin-course-overview.component.html",
	styleUrls: ["./admin-course-overview.component.scss"],
})
export class AdminCourseOverviewComponent implements OnInit {
  @ViewChild(PlaceholderDirective, { static: false })
  modalHost: PlaceholderDirective;

	icons = { faPen, faPlus };

	course: Course;

	get totalLessonLength(): number {
		return 0;
	}

	constructor(
		private courseService: CourseService,
		private route: ActivatedRoute,
  private modalService: ModalService,
  private activatedRoute: ActivatedRoute,
  private router: Router
	) {}

	ngOnInit(): void {
		this.route.params.subscribe((params: Params) => {
			this.courseService
				.getByID(params.id)
				.subscribe((course: Course) => {
					this.course = course;
				});
		});
	}

  openNewLessonModal(): void {
    const modal = this.modalService.createModal(
      SetLessonModalComponent,
      this.modalHost
    );
    modal.instance.course = this.course;
    modal.instance.set.subscribe((lesson: Lesson) => {
      this.router.navigate(["lessons", lesson.id], {
        relativeTo: this.route,
      });
    });
  }
}
