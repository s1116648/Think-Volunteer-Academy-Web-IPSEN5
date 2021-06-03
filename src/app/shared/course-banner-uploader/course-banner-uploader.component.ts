import {
	Component,
	OnInit,
	forwardRef,
	Input,
} from "@angular/core";
import { FileService } from "src/app/file/file.service";
import { UploadedFileResponse } from "src/app/file/UploadedFileResponse.model";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { environment } from "../../../environments/environment";

@Component({
	selector: "app-course-banner-uploader",
	templateUrl: "./course-banner-uploader.component.html",
	styleUrls: ["./course-banner-uploader.component.scss"],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => CourseBannerUploaderComponent),
			multi: true,
		},
	],
})
export class CourseBannerUploaderComponent
	implements OnInit, ControlValueAccessor
{
	@Input() disabled: boolean = false;

	imagePath: string;

	isUploading = false;

	icons = { faImage };

	get imageUrl(): string {
		return environment.S3_ENDPOINT + this.imagePath;
	}

	constructor(private fileService: FileService) {}

	ngOnInit(): void {}

	@Input() public set value(value: string) {
		if (!this.disabled) {
			this.imagePath = value;
			console.log(value);
			this.onChange(value);
		}
	}

	public get value(): string {
		return this.imagePath;
	}

	public onChange: any = () => {};
	public onTouch: any = () => {};

	writeValue(obj: string): void {
		this.value = obj;
	}

	registerOnChange(fn: string): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: string): void {
		this.onTouch = fn;
	}

	setDisabledState?(isDisabled: boolean): void {
		this.disabled = isDisabled;
	}

	setOption(option: string): void {
		this.writeValue(option);
	}

	onFileUpload(event: Event): void {
		const acceptedImageTypes = ["image/jpeg", "image/jpg"];
		const target = event.target as HTMLInputElement;
		const files = target.files as FileList;
		const file = files[0];

		if (!acceptedImageTypes.includes(file?.type)) {
			return;
		}

		this.isUploading = true;

		this.fileService
			.upload(file)
			.subscribe((uploadedFileResponse: UploadedFileResponse) => {
				this.isUploading = false;
				this.setOption(uploadedFileResponse.path);
			});
	}
}
