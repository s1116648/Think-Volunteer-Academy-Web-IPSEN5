import { Component, Input, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
    selector: "app-avatar",
    templateUrl: "./avatar.component.html",
    styleUrls: ["./avatar.component.scss"]
})
export class AvatarComponent implements OnInit {
    @Input() avatar: string;
    @Input() size: number = 40;

    readonly defaultImage = "./assets/images/avatar.png";

    get image(): string {
        return this.avatar
            ? environment.S3_ENDPOINT + this.avatar
            : this.defaultImage;
    }

    constructor() {
    }

    ngOnInit(): void {
    }
}
