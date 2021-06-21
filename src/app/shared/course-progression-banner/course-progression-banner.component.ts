import { Component, Input, OnInit } from "@angular/core";
import { Lesson } from "src/app/lesson/lesson.model";
import { LessonService } from "src/app/lesson/lesson.service";
import { Badge } from "src/app/shared/badge.model";
import { BadgeService } from "src/app/shared/badge.service";
import { HttpPaginatedResult } from "src/app/shared/http-paginated-result";
import { User } from "src/app/user/user.model";
import { Course } from "../../course/course.model";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { Certificate } from "../certificate.model";
import { CertificateService } from "../certificate.service";

@Component({
	selector: "app-course-progression-banner",
	templateUrl: "./course-progression-banner.component.html",
	styleUrls: ["./course-progression-banner.component.scss"]
})
export class CourseProgressionBannerComponent implements OnInit {
	@Input() user: User;
	@Input() course: Course;

	badges: Badge[] = [];
	lessons: Lesson[] = [];
	certificates: Certificate[] = [];

	icons = {
		faGraduationCap
	};

	constructor(
		private badgeService: BadgeService,
		private lessonService: LessonService,
		private certificateService: CertificateService
	) {
	}

	ngOnInit(): void {
		this.badgeService
			.getBadgesByUser(this.user.id, this.course.id)
			.subscribe((result: HttpPaginatedResult<Badge>) => {
				this.badges = result.items;
			});
		this.lessonService
			.get(this.course.id)
			.subscribe((result: HttpPaginatedResult<Lesson>) => {
				this.lessons = result.items;
			});
		this.certificateService
			.getCertificatesByUser(this.user.id)
			.subscribe((result: HttpPaginatedResult<Certificate>) => {
				this.certificates = result.items;
			});
	}

	isLessonCompleted = (lesson: Lesson): boolean =>
		this.badges.map((badge) => badge.lesson.id).includes(lesson.id);

	isCourseCompleted = (course: Course): boolean =>
		this.certificates.map((certificate) => certificate.course.id).includes(course.id);
}
