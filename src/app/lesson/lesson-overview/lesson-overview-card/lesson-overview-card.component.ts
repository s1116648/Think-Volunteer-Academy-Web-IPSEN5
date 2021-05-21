import {Component, Input, OnInit} from "@angular/core";
import {Lesson} from "../../lesson.model";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-lesson-overview-card",
  templateUrl: "./lesson-overview-card.component.html",
  styleUrls: ["./lesson-overview-card.component.scss"]
})
export class LessonOverviewCardComponent implements OnInit {
  @Input() lesson!: Lesson;
  icons = { faArrowRight };
  constructor() { }

  ngOnInit(): void {
  }

}
