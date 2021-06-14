import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-test-info",
  templateUrl: "./test-info.component.html",
  styleUrls: ["./test-info.component.scss"]
})
export class TestInfoComponent implements OnInit {

  @Input() courseName;
  @Input() lessonName;
  @Input() testLength;

  constructor() { }

  ngOnInit(): void {
  }
}
