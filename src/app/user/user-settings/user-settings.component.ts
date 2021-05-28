import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-user-settings",
    templateUrl: "./user-settings.component.html",
    styleUrls: ["./user-settings.component.scss"]
})
export class UserSettingsComponent implements OnInit {

    firstname: string;
    lastname: string;
    email: string;
    currentPassword: string;
    newPassword: string;
    repeatPassword: string;

    messageString: string;
    showMessage = false;

    ngOnInit(): void {
        // const currentUser: User = JSON.parse(localStorage.getItem("loginInfo")).user;
        // this.setName(currentUser.firstname, currentUser.lastname);
        // this.setEmail(currentUser.email);

      this.setName("Lars", "Verhoorn");
      this.setEmail("lars@mail.com");
    }

    setName(firstname: string, lastname: string): void {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    updateProfile(): void {
        if (this.currentPassword === "" || this.currentPassword === undefined) {
            document.getElementById("currentPassword").setAttribute("style", "border-color: red");
            this.changeMessage("Enter your current password.");
        } else {
            console.log(this.newPassword);
            console.log(this.repeatPassword);
            if ((this.newPassword === "" || this.newPassword === undefined) &&
                (this.repeatPassword === "" || this.repeatPassword === undefined)) {
                document.getElementById("newPassword").removeAttribute("style");
                document.getElementById("repeatPassword").removeAttribute("style");
                this.changeMessage("Profile has been updated.");
            } else {
                if (this.newPassword === this.repeatPassword) {
                    if (this.newPassword.length >= 6) {
                        this.changeMessage("Profile has been updated.");
                    } else {
                        document.getElementById("newPassword").setAttribute("style", "border-color: red");
                        document.getElementById("repeatPassword").setAttribute("style", "border-color: red");
                        this.changeMessage("Password needs to be at least 6 characters long.");
                    }
                } else {
                    document.getElementById("newPassword").setAttribute("style", "border-color: red");
                    document.getElementById("repeatPassword").setAttribute("style", "border-color: red");
                    this.changeMessage("Passwords don't match.");
                }
            }
        }

        this.showMessage = true;
    }

    changeMessage(newMessageString: string): void {
        this.messageString = newMessageString;
    }

    keyPressCurrentPassword(): void {
        document.getElementById("currentPassword").removeAttribute("style");
        this.showMessage = false;
    }

    keyPressNewPassword(): void {
        document.getElementById("newPassword").removeAttribute("style");
        document.getElementById("repeatPassword").removeAttribute("style");
        this.showMessage = false;
    }
}
