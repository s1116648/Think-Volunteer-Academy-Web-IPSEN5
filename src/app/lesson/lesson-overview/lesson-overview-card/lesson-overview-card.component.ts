import {Component, Input, OnInit} from "@angular/core";
import {Lesson} from "../../../shared/models/lesson.model";

@Component({
  selector: "app-lesson-overview-card",
  templateUrl: "./lesson-overview-card.component.html",
  styleUrls: ["./lesson-overview-card.component.scss"]
})
export class LessonOverviewCardComponent implements OnInit {
  @Input() lesson!: Lesson;
  constructor() { }

  ngOnInit(): void {
  }

}
