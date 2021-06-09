import {Component, Input, OnInit} from "@angular/core";
import { Course } from "../../course.model";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ProgressModel } from "../my-courses/progress.model";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "app-course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.scss"]
})
export class CourseCardComponent implements OnInit {

    @Input() course: Course;
    @Input() progress: ProgressModel;
    icons = { faArrowRight };

    constructor() { }

    ngOnInit(): void {
    }

    get image(): string {
        return environment.S3_ENDPOINT + this.course.image;
    }
}
