import { Component, OnInit } from "@angular/core";
import {NgForm} from "@angular/forms";
import {Lesson} from "../lesson.model";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute} from "@angular/router";
import {LessonService} from "../lesson.service";

@Component({
  selector: "app-admin-lesson-view",
  templateUrl: "./admin-lesson-view.component.html",
  styleUrls: ["./admin-lesson-view.component.scss"]
})
export class AdminLessonViewComponent implements OnInit {
    lesson: Lesson;
    icons = { faArrowRight };
  constructor(private route: ActivatedRoute,
              private lessonService: LessonService) { }

  ngOnInit(): void {
      this.lessonService
          .getById(this.route.snapshot.params.lessonId)
          .subscribe((lesson: Lesson) => {
              this.lesson = lesson;
          });
  }

    update(lessonForm: NgForm): void {
        console.log("lala");
    }
}
