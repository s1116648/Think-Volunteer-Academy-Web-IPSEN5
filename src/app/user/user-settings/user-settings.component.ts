import { Component, OnInit } from "@angular/core";
import { User } from "../user.model";
import { NgForm } from "@angular/forms";
import { UpdateProfileDto } from "../dto/update-profile.dto";
import { UserService } from "../user.service";
import { AuthService } from "../../auth/auth.service";
import { ChangePasswordDto } from "../dto/change-password.dto";
import { UploadedFileResponse } from "../../file/UploadedFileResponse.model";
import { FileService } from "../../file/file.service";
import { ImageResizerService } from "../../file/image-resizer.service";
import { NotifierService } from "angular-notifier";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
	selector: "app-user-settings",
	templateUrl: "./user-settings.component.html",
	styleUrls: ["./user-settings.component.scss"],
})
export class UserSettingsComponent implements OnInit {
	currentUser: User;

	isUploading: boolean = false;

	constructor(
		private userService: UserService,
		private authService: AuthService,
		private fileService: FileService,
		private resizeService: ImageResizerService,
		private notifierService: NotifierService
	) {}

	ngOnInit(): void {
		this.currentUser = this.authService.loginInfo.getValue().user;
	}

	onFileUpload(event: Event): void {
		const acceptedImageTypes = ["image/jpeg", "image/jpg"];
		const target = event.target as HTMLInputElement;
		const files = target.files as FileList;
		const file = files[0];
		this.isUploading = true;

		if (!acceptedImageTypes.includes(file?.type)) {
			this.isUploading = false;
			this.notifierService.notify("error", "File type not supported.");
			return;
		}

		this.resizeService
			.resizeImage(file, 180, 180)
			.subscribe((resizedImage: File) => {
				this.fileService
					.upload(resizedImage)
					.subscribe((uploadedFileResponse: UploadedFileResponse) => {
						this.currentUser.avatar = uploadedFileResponse.path;
						this.isUploading = false;
						this.notifierService.notify("success", "Avatar uploaded.");
					},
					(e: HttpErrorResponse) => {
						this.notifierService.notify("error", "Uploading avatar failed.");
					});
			});
	}

	updateProfile(form: NgForm): void {
		const values = form.value;

		const dto: UpdateProfileDto = {
			firstname: values.firstName,
			lastname: values.lastName,
			email: values.email,
			avatar: this.currentUser.avatar,
		};

		this.userService.updateProfile(this.currentUser.id, dto).subscribe(
			(user: User) => {
				user.avatar = this.currentUser.avatar;
				this.updateUserInStorage(user);
				this.notifierService.notify("success", "Profile changed.");
			},
			(e: HttpErrorResponse) => {
				this.notifierService.notify("error", "Profile change failed.");
			}
		);
	}

	changePassword(form: NgForm): void {
		const values = form.value;

		if (values.newPassword === values.repeatPassword) {
			const dto: ChangePasswordDto = {
				currentPassword: values.currentPassword,
				newPassword: values.newPassword,
			};

			this.userService.changePassword(dto).subscribe(
				(user: User) => {
					this.notifierService.notify("success", "Password has been changed.");
					this.updateUserInStorage(user);
				},
				(e: HttpErrorResponse) => {
					this.notifierService.notify("error", e.status === 401 ? "Password incorrect." : "Something went wrong.");
				}
			);
		} else {
			this.notifierService.notify("error", "Passwords don't match.");
		}
	}

	private updateUserInStorage(user: User): void {
		const loginInfo = this.authService.loginInfo.getValue();
		loginInfo.user.firstname = user.firstname;
		loginInfo.user.lastname = user.lastname;
		loginInfo.user.email = user.email;
		loginInfo.user.avatar = user.avatar;
		this.authService.handleAuthentication(loginInfo);
	}
}
