import { Component, Input, OnInit } from "@angular/core";
import { CourseCategory } from "../../../course-category/course-category.model";
import { Course } from "../../course.model";
import { CourseService } from "../../course.service";
import { HttpPaginatedResult } from "../../../shared/http-paginated-result";

@Component({
	selector: "app-course-category-card",
	templateUrl: "./category-card.component.html",
	styleUrls: ["./category-card.component.scss"],
})
export class CategoryCardComponent implements OnInit {
	@Input() courseCategory: CourseCategory;

	courses: Course[] = [];

	constructor(private courseService: CourseService) {}

	ngOnInit(): void {
		this.courseService
			.getCoursesByCategory(this.courseCategory.id)
			.subscribe((courses: HttpPaginatedResult<Course>) => {
				this.courses = courses.items;
			});
	}
}
