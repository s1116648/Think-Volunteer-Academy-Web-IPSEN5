import {Component, OnInit, ViewChild} from "@angular/core";
import {Lesson} from "../../lesson/lesson.model";
import {LessonService} from "../../lesson/lesson.service";
import {ActivatedRoute, Params } from "@angular/router";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {Question} from "../question.model";
import {Test} from "../test.model";
import {TestService} from "../test.service";
import {CreateQuestionDTO} from "../dto/create-question.dto";
import {PlaceholderDirective} from "../../shared/placeholder.directive";
import {ModalService} from "../../shared/modal.service";
import {AddQuestionModalComponent} from "../modals/add-question-modal/add-question-modal.component";

@Component({
  selector: "app-admin-edit-test-view",
  templateUrl: "./admin-edit-test-view.component.html",
  styleUrls: ["./admin-edit-test-view.component.scss"]
})
export class AdminEditTestViewComponent implements OnInit {
    @ViewChild(PlaceholderDirective, { static: false })
    modalHost: PlaceholderDirective;

    lesson: Lesson;
    questions: Question[] = [];
    newQuestions: CreateQuestionDTO[] = [];
    test: Test;

    icons = { faPlus };

  constructor(private lessonService: LessonService,
              private route: ActivatedRoute,
              private testService: TestService,
              private modalService: ModalService) {}

  ngOnInit(): void {
      this.route.params.subscribe((params: Params) => {
          this.lessonService
              .getById(params.lessonId)
              .subscribe((lesson: Lesson) => {
                  this.lesson = lesson;
              });

          this.test = this.testService.test;
          this.questions = this.test.questions;
      });
  }

    addQuestion(): void {
        const modal = this.modalService.createModal(
            AddQuestionModalComponent,
            this.modalHost
        );
    }
}
