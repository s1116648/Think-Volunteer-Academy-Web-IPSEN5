import { Component, Input, OnInit } from "@angular/core";
import { Course } from "../../course.model";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { environment } from "../../../../environments/environment";
import { Progress } from "../../progress.model";
import { CertificateService } from "../../../shared/certificate.service";
import { AuthService } from "../../../auth/auth.service";

@Component({
	selector: "app-course-card",
	templateUrl: "./course-card.component.html",
	styleUrls: ["./course-card.component.scss"],
})
export class CourseCardComponent implements OnInit {
	@Input() course: Course;
	@Input() progress: Progress;

	icons = { faArrowRight };

	hasCertificate: boolean;

	constructor(
		private certificateService: CertificateService,
		private authService: AuthService
	) {}

	ngOnInit(): void {
		this.checkIfCertificate();
	}

	get image(): string {
		return environment.S3_ENDPOINT + this.course.image;
	}

	get progressPercentage(): number {
		const total = this.progress.lessonCount + 1;
		let part = this.progress.lessonsCompleted;
		let progress: number;
		if (this.hasCertificate) {
			part ++;
		}
		progress = ((part * 100) / (total));
		return progress;
	}

	checkIfCertificate(): void {
		const userId = this.authService.loginInfo.getValue().user.id;
		this.certificateService.getCertificatesByUser(userId).subscribe((value) => {
			this.hasCertificate = value.items.map((certificate) => certificate.course.id).includes(this.course.id);
		});
	}
}
