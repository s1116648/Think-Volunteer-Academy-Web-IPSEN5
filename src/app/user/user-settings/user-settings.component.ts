import { Component, EventEmitter, OnInit, Output, ViewChild } from "@angular/core";
import { User } from "../user.model";
import { NgForm } from "@angular/forms";
import { UpdateProfileDto } from "../dto/update-profile.dto";
import { UserService } from "../user.service";
import { AuthService } from "../../auth/auth.service";
import { ChangePasswordDto } from "../dto/change-password.dto";
import { ModalService } from "../../shared/modal.service";
import { PlaceholderDirective } from "../../shared/placeholder.directive";
import { ConfirmModalComponent } from "../../shared/modals/confirm-modal/confirm-modal.component";
import { Router } from "@angular/router";
import { UploadedFileResponse } from "../../file/UploadedFileResponse.model";
import { FileService } from "../../file/file.service";
import { ImageResizerService } from "../../file/image-resizer.service";

@Component({
    selector: "app-user-settings",
    templateUrl: "./user-settings.component.html",
    styleUrls: ["./user-settings.component.scss"],
})
export class UserSettingsComponent implements OnInit {
    @Output() set = new EventEmitter<User>();

    @ViewChild(PlaceholderDirective, { static: false })
    modalHost: PlaceholderDirective;

    currentUser: User;

    isUploading: boolean = false;
    updateMessage: string;
    updateMessageShown: boolean;
    updatePasswordMessage: string;
    updatePasswordMessageShown: boolean;

    constructor(
        private userService: UserService,
        private authService: AuthService,
        private fileService: FileService,
        private resizeService: ImageResizerService,
        private modalService: ModalService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.currentUser = this.authService.loginInfo.getValue().user;
        if (!this.currentUser.avatar) {
            this.currentUser.avatar =
                "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png";
        }
    }

    onFileUpload(event: Event): void {
        const acceptedImageTypes = ["image/jpeg", "image/jpg", "image/png"];
        const target = event.target as HTMLInputElement;
        const files = target.files as FileList;
        const file = files[0];
        this.isUploading = true;

        if (!acceptedImageTypes.includes(file?.type)) {
            return;
        }

        this.resizeService
            .resizeImage(file, 180, 180)
            .subscribe((resizedImage: File) => {
                this.fileService
                    .upload(resizedImage)
                    .subscribe((uploadedFileResponse: UploadedFileResponse) => {
                        this.currentUser.avatar = uploadedFileResponse.url;
                        this.isUploading = false;
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
                this.setUpdateMessage("Profile saved.");
                this.showUpdateMessage(true);
            },
            (error) => {
                this.updateMessage = error;
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
                    this.updateUserInStorage(user);
                    this.setPasswordMessage("Password has been changed.");
                    this.showPasswordMessage(true);
                },
                () => {
                    this.setPasswordMessage(
                        "An error has occurred. Check your password."
                    );
                    this.showPasswordMessage(true);
                }
            );
        } else {
            this.setPasswordMessage("Passwords don't match.");
            this.showPasswordMessage(true);
        }
    }

    showRemoveModal(): void {
        const modal = this.modalService.createModal(ConfirmModalComponent, this.modalHost);
        modal.instance.description = `
            You are about to delete your account <b>indefinitely</b>!<br>
            This action can <b>not</b> be reverted!`;
        modal.instance.title = "Are you sure you want to delete your account?";

        modal.instance.confirmed.subscribe(() => {
            this.userService.delete(this.currentUser.id).subscribe(() => {
                this.authService.logout();
                this.router.navigate(["login"]);
            });
        });
    }

    private updateUserInStorage(user: User): void {
        const loginInfo = this.authService.loginInfo.getValue();
        loginInfo.user.firstname = user.firstname;
        loginInfo.user.lastname = user.lastname;
        loginInfo.user.email = user.email;
        loginInfo.user.avatar = user.avatar;
        this.authService.handleAuthentication(loginInfo);
    }

    private setUpdateMessage(message: string): void {
        this.updateMessage = message;
    }

    private showUpdateMessage(bool: boolean): void {
        this.updateMessageShown = bool;
    }

    private setPasswordMessage(message: string): void {
        this.updatePasswordMessage = message;
    }

    private showPasswordMessage(bool: boolean): void {
        this.updatePasswordMessageShown = bool;
    }
}
