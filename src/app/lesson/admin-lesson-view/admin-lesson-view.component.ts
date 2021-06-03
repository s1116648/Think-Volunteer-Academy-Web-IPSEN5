import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Lesson } from "../lesson.model";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ActivatedRoute, Router } from "@angular/router";
import { LessonService } from "../lesson.service";
import { UpdateLessonDTO } from "../dto/update-lesson.dto";

@Component({
	selector: "app-admin-lesson-view",
	templateUrl: "./admin-lesson-view.component.html",
	styleUrls: ["./admin-lesson-view.component.scss"],
})
export class AdminLessonViewComponent implements OnInit {
	lesson: Lesson;
	icons = { faArrowRight };

	constructor(
		private route: ActivatedRoute,
		private lessonService: LessonService,
		private router: Router,
	) {}

	ngOnInit(): void {
		this.lessonService
			.getById(this.route.snapshot.params.lessonId)
			.subscribe((lesson: Lesson) => {
				this.lesson = lesson;
			});
	}

	update(lessonForm: NgForm): void {
		const values = lessonForm.value;

		const updateDto: UpdateLessonDTO = {
			name: values.name,
			content: values.content,
			description: values.description,
			image: values.image,
			length: values.length,
		};

		this.lessonService.update(this.lesson.id, updateDto).subscribe(() => {
			this.router.navigate(["../.."], { relativeTo: this.route })
        .catch((err) => console.log(err));
		});
	}
}
