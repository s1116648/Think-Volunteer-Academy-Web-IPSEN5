import { Component, Input, OnInit } from "@angular/core";

@Component({
	selector: "app-progress-circle",
	templateUrl: "./progress-circle.component.html",
	styleUrls: ["./progress-circle.component.scss"],
})
export class ProgressCircleComponent implements OnInit {
	@Input() number: number;
	@Input() completed: boolean;
	defaultBackground: string = "progress-circle";
	completedBackground: string = "yellow-progress-circle";
	constructor() {}

	ngOnInit(): void {
		this.convertNumberToRoman(1);
	}

	convertNumberToRoman(num: number): string {
		const romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
		const integerArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
		let romanizedNumber = "";

		romanNumerals.forEach((value, index) => {
			while (num >= integerArray[index]) {
				romanizedNumber += value;
				num -= integerArray[index];
			}
		});
		return romanizedNumber;
	}
}
