import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { User } from "../user.model";
import { NgForm } from "@angular/forms";
import { UpdateProfileDto } from "../dto/update-profile.dto";
import { UserService } from "../user.service";
import { AuthService } from "../../auth/auth.service";

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

    constructor(private userService: UserService, private authService: AuthService) {
    }

    ngOnInit(): void {
        const currentUser = JSON.parse(localStorage.getItem("loginInfo")).user;
        this.setName(currentUser.firstname, currentUser.lastname);
        this.setEmail(currentUser.email);
    }

    updateProfile(form: NgForm): void {
        const values = form.value;
        console.log(values);

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

    setName(firstname: string, lastname: string): void {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    setEmail(email: string): void {
        this.email = email;
    }

}
