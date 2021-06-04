import { Component, OnInit } from "@angular/core";
import { Course } from "../../course.model";
import { CourseService } from "../../course.service";

@Component({
  selector: "app-my-courses",
  templateUrl: "./my-courses.component.html",
  styleUrls: ["./my-courses.component.scss"]
})
export class MyCoursesComponent implements OnInit {

    courses: Course[];

    constructor(private courseService: CourseService) {}

    ngOnInit(): void {
        this.initialiseCourses();
    }

    initialiseCourses(): void {
    }

}
