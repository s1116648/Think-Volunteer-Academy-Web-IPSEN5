import {Component, Input, OnInit} from "@angular/core";
import { Course } from "../../course.model";

@Component({
  selector: "app-course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.scss"]
})
export class CourseCardComponent implements OnInit {

    @Input() course: Course;

    // defaultImg : string;

    constructor() { }

    ngOnInit(): void {

    }

}
