import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Modal } from "../modal.interface";

@Component({
    selector: "app-confirm-modal",
    templateUrl: "./confirm-modal.component.html",
    styleUrls: ["./confirm-modal.component.scss"]
})
export class ConfirmModalComponent implements OnInit, Modal {
    @Input() title: string = "Are you sure?";
    @Input() description: string;
    @Output() closeModal = new EventEmitter();
    @Output() confirmed = new EventEmitter();
    @Output() rejected = new EventEmitter();
    constructor() {}

    ngOnInit(): void {}

    close = (): void => this.closeModal.emit();

    confirm(): void {
        this.close();
        this.confirmed.emit();
    }

    reject(): void {
        this.close();
        this.rejected.emit();
    }
}
