import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-test-screen-info",
  templateUrl: "./test-screen-info.component.html",
  styleUrls: ["./test-screen-info.component.scss"]
})
export class TestScreenInfoComponent implements OnInit {

  @Input() courseName;
  @Input() lessonName;
  @Input() testLength;

  constructor() { }

  ngOnInit(): void {
  }
}
