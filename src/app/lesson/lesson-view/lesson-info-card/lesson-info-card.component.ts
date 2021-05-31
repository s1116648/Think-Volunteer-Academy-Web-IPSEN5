import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: "app-lesson-info-card",
  templateUrl: "./lesson-info-card.component.html",
  styleUrls: ["./lesson-info-card.component.scss"]
})
export class LessonInfoCardComponent implements OnInit {
    @Input() courseName: string;
    @Input() lessonLength: number;
    @Input() lessonName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
