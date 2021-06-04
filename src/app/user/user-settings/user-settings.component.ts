import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { User } from "../user.model";
import { NgForm } from "@angular/forms";
import { UpdateProfileDto } from "../dto/update-profile.dto";
import { UserService } from "../user.service";
import { AuthService } from "../../auth/auth.service";
import { ChangePasswordDto } from "../dto/change-password.dto";

@Component({
    selector: "app-user-settings",
    templateUrl: "./user-settings.component.html",
    styleUrls: ["./user-settings.component.scss"]
})
export class UserSettingsComponent implements OnInit {
    @Output() set = new EventEmitter<User>();

    firstname: string;
    lastname: string;
    email: string;
    updateMessage: string;
    updateMessageShown: boolean;
    updatePasswordMessage: string;
    updatePasswordMessageShown: boolean;

    constructor(private userService: UserService, private authService: AuthService) {
    }

    ngOnInit(): void {
        const currentUser = JSON.parse(localStorage.getItem("loginInfo")).user;
        this.setName(currentUser.firstname, currentUser.lastname);
        this.setEmail(currentUser.email);
    }

    updateProfile(form: NgForm): void {
        const values = form.value;

        const dto: UpdateProfileDto = {
            firstname: values.firstName,
            lastname: values.lastName,
            email: values.email
        };

        this.userService.updateProfile(dto).subscribe(
            (user: User) => {
                this.set.emit(user);
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
                repeatPassword: values.repeatPassword
            };

            this.userService.changePassword(dto).subscribe(
                (user: User) => {
                    this.set.emit(user);
                    this.updateUserInStorage(user);
                    this.setPasswordMessage("Password has been changed.");
                    this.showPasswordMessage(true);
                },
                () => {
                    this.setPasswordMessage("An error has occured. Check your password.");
                    this.showPasswordMessage(true);
                }
            );
        } else {
            this.setPasswordMessage("Passwords don't match.");
            this.showPasswordMessage(true);
        }
    }

    updateUserInStorage(user: User): void {
        const loginInfo = JSON.parse(localStorage.getItem("loginInfo"));
        loginInfo.user.firstname = user.firstname;
        loginInfo.user.lastname = user.lastname;
        loginInfo.user.email = user.email;
        this.authService.handleAuthentication(loginInfo);
    }

    setUpdateMessage(message: string): void {
        this.updateMessage = message;
    }

    showUpdateMessage(bool: boolean): void {
        this.updateMessageShown = bool;
    }

    setPasswordMessage(message: string): void {
        this.updatePasswordMessage = message;
    }

    showPasswordMessage(bool: boolean): void {
        this.updatePasswordMessageShown = bool;
    }

    setName(firstname: string, lastname: string): void {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    setEmail(email: string): void {
        this.email = email;
    }
}
