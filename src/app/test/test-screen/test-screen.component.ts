import { Component, Input, OnInit } from "@angular/core";
import { Test } from "../model/test.model";
import { ActivatedRoute, Params } from "@angular/router";
import { TestService } from "../services/test.service";
import { CourseService } from "../../course/course.service";
import { LessonService } from "../../lesson/lesson.service";
import { Course } from "../../course/course.model";
import { Lesson } from "../../lesson/lesson.model";

@Component({
  selector: "app-screen-test",
  templateUrl: "./test-screen.component.html",
  styleUrls: ["./test-screen.component.scss"]
})
export class TestScreenComponent implements OnInit {

  testId: string;
  courseName: string;
  lessonName: string;
  test: Test;

  constructor(
    private route: ActivatedRoute,
    private testService: TestService,
    private courseService: CourseService,
    private lessonService: LessonService
  ) {}

  ngOnInit(): void {
    this.initialiseTest();
  }

  initialiseTest(): void {
    this.route.params.subscribe((params: Params) => {
      this.initialiseCourseName(params.courseId);
      if (params.lessonId) {
        this.initialiseLessonName(params.lessonId);
      }
      // this.testService.getTestByID(params.testId);
    });
  }

  initialiseCourseName(courseId: string): void {
    this.courseService.getByID(courseId).subscribe((course: Course) => {
      this.courseName = course.name;
    });
  }

  initialiseLessonName(lessonId: string): void {
    this.lessonService.getById(lessonId).subscribe((lesson: Lesson) => {
      this.lessonName = lesson.name;
    });
  }
}
