import {Component, Input, OnInit} from "@angular/core";
import { Course } from "../../course.model";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ProgressModel } from "../my-courses/progress.model";

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
        if (this.progress) {
            this.setProgressBar();
        }
    }

    setProgressBar(): void {
        const width = this.progress.progress * 100;
        if (document.getElementById("progress-bar")) {
            document.getElementById("progress-bar").style.width = `${width}%`;
        }
    }
}
