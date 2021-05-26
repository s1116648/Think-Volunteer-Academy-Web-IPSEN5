import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "padStart",
})
export class PadStartPipe implements PipeTransform {
	transform(
		value: string | number,
		maxLength: number,
		padText: string
	): string {
		if (!value) return String(value);

		return String(value).padStart(maxLength, padText);
	}
}
