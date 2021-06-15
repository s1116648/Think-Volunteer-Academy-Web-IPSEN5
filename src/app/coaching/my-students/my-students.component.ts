import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-my-students",
    templateUrl: "./my-students.component.html",
    styleUrls: ["./my-students.component.scss"]
})
export class MyStudentsComponent implements OnInit {
    students: [
        { firstname: string; avatar: string; lastname: string },
        { firstname: string; avatar: string; lastname: string },
        { firstname: string; avatar: string; lastname: string },
        { firstname: string; avatar: string; lastname: string },
        { firstname: string; avatar: string; lastname: string }
    ];

    constructor() {
    }

    ngOnInit(): void {
        this.students = [
            {
                firstname: "Noah",
                lastname: "Slik",
                avatar: "https://www.svgrepo.com/show/157053/avatar.svg"
            },
            {
                firstname: "Bas",
                lastname: "Janssen",
                avatar: "https://www.svgrepo.com/show/17344/avatar.svg"
            },
            {
                firstname: "Toshe",
                lastname: "Laurine",
                avatar: "https://www.svgrepo.com/show/169986/avatar.svg"
            },
            {
                firstname: "Ragna",
                lastname: "Lonny",
                avatar: "https://www.svgrepo.com/show/169986/avatar.svg"
            },
            {
                firstname: "Wendi",
                lastname: "Leszek",
                avatar: "https://www.svgrepo.com/show/169986/avatar.svg"
            }
        ];
    }

}
