import { Component, Input, OnInit } from "@angular/core";
import { Lesson } from "../../lesson.model";

@Component({
  selector: "app-progress-circle",
  templateUrl: "./progress-circle.component.html",
  styleUrls: ["./progress-circle.component.scss"],
})
export class ProgressCircleComponent implements OnInit {
  @Input() lesson!: Lesson;
  constructor() {}

  ngOnInit(): void {}

  convertNumberToRoman(num: number): any {
    if (num < 1) {
      return "";
    }
    if (num >= 40) {
      return "XL" + this.convertNumberToRoman(num - 40);
    }
    if (num >= 10) {
      return "X" + this.convertNumberToRoman(num - 10);
    }
    if (num >= 9) {
      return "IX" + this.convertNumberToRoman(num - 9);
    }
    if (num >= 5) {
      return "V" + this.convertNumberToRoman(num - 5);
    }
    if (num >= 4) {
      return "IV" + this.convertNumberToRoman(num - 4);
    }
    if (num >= 1) {
      return "I" + this.convertNumberToRoman(num - 1);
    }
  }
}

