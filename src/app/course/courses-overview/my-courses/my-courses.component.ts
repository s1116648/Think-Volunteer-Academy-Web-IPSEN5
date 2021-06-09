import { Component, OnInit } from "@angular/core";
import { Course } from "../../course.model";
import { CourseService } from "../../course.service";
import { MyCoursesModel } from "./my-courses.model";

@Component({
  selector: "app-my-courses",
  templateUrl: "./my-courses.component.html",
  styleUrls: ["./my-courses.component.scss"]
})
export class MyCoursesComponent implements OnInit {

    myCourses: MyCoursesModel[] = [];
    courses: Course[] = [];

    constructor(private courseService: CourseService) {}

    ngOnInit(): void {
        this.initialiseCourses();
    }

    initialiseCourses(): void {
        this.courseService.getCoursesFromActiveUser().subscribe(
            (courseData) => {
                this.myCourses = courseData.items;
            }
        );
    }
}
