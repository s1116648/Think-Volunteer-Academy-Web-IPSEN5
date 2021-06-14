import { Component, OnInit } from "@angular/core";
import {Lesson} from "../../lesson/lesson.model";
import {LessonService} from "../../lesson/lesson.service";
import {ActivatedRoute, Params } from "@angular/router";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {Question} from "../question.model";
import {Test} from "../test.model";
import {TestService} from "../test.service";
import {CreateQuestionDTO} from "../dto/create-question.dto";

@Component({
  selector: "app-admin-edit-test-view",
  templateUrl: "./admin-edit-test-view.component.html",
  styleUrls: ["./admin-edit-test-view.component.scss"]
})
export class AdminEditTestViewComponent implements OnInit {
  lesson: Lesson;
  questions: Question[] = [];
  newQuestions: CreateQuestionDTO[] = [];
  test: Test;

  icons = { faPlus };

  constructor(private lessonService: LessonService,
              private route: ActivatedRoute,
              private testService: TestService) {}

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
      // const defaultQuestion: CreateQuestionDTO = {
      //     text: "new question",
      //     answers: []
      // };
      //
      // this.questions.push(defaultQuestion);
    }
}
