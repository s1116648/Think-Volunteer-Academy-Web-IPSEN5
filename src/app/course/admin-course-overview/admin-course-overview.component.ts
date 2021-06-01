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
import { LessonService } from "src/app/lesson/lesson.service";
import { HttpPaginatedResult } from "src/app/shared/http-paginated-result";

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
	lessons: Lesson[];

	constructor(
		private courseService: CourseService,
		private route: ActivatedRoute,
  private modalService: ModalService,
  private activatedRoute: ActivatedRoute,
  private router: Router,
		private lessonService: LessonService
	) {}

	ngOnInit(): void {
		this.route.params.subscribe((params: Params) => {
			this.courseService
				.getByID(params.id)
				.subscribe((course: Course) => {
					this.course = course;
				});

			this.lessonService
				.get(params.id)
				.subscribe((paginated: HttpPaginatedResult<Lesson>) => {
					this.lessons = paginated.items;
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

  get totalLessonLength(): number {
    return 0;
  }
}
