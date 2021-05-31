import { Component, OnInit } from "@angular/core";
import {Course} from "../../course/course.model";
import {ActivatedRoute, Params} from "@angular/router";
import {LessonService} from "../lesson.service";
import {Lesson} from "../lesson.model";
import {CourseService} from "../../course/course.service";

@Component({
  selector: "app-lesson-view",
  templateUrl: "./lesson-view.component.html",
  styleUrls: ["./lesson-view.component.scss"]
})
export class LessonViewComponent implements OnInit {
  lesson: Lesson;
  course: Course;
  constructor(private route: ActivatedRoute,
              private lessonService: LessonService,
              private courseService: CourseService) { }

  ngOnInit(): void {
      this.route.params.subscribe((params: Params) => {
          this.lessonService
              .getById(params.id)
              .subscribe((lesson: Lesson) => {
                  this.lesson = lesson;
                  this.getCourseFromId();
              });
      });
  }

  getCourseFromId(): void{
      this.courseService
          .getByID(this.lesson.courseId)
          .subscribe((course: Course) => {
              this.course = course;
          });
  }
}
