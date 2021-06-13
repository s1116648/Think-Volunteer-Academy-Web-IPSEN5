import { Component, OnInit } from "@angular/core";
import {Lesson} from "../../lesson/lesson.model";
import {LessonService} from "../../lesson/lesson.service";
import {ActivatedRoute, Params } from "@angular/router";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-admin-edit-test-view",
  templateUrl: "./admin-edit-test-view.component.html",
  styleUrls: ["./admin-edit-test-view.component.scss"]
})
export class AdminEditTestViewComponent implements OnInit {
  lesson: Lesson;
  icons = { faPlus };

  constructor(private lessonService: LessonService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.route.params.subscribe((params: Params) => {
          this.lessonService
              .getById(params.lessonId)
              .subscribe((lesson: Lesson) => {
                  this.lesson = lesson;
              });
      });
  }

}
