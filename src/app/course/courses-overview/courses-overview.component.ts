import { Component, NgModule, OnInit } from "@angular/core";
import { CourseCategory } from "../../course-category/course-category.model";
import { CourseCategoryService } from "../../course-category/course-category.service";
import { HttpPaginatedResult } from "../../shared/http-paginated-result";
import { Course } from "../course.model";

@Component({
    selector: "app-courses-overview",
    templateUrl: "./courses-overview.component.html",
    styleUrls: ["./courses-overview.component.scss"]
})
export class CoursesOverviewComponent implements OnInit {

    categories: CourseCategory[];

    constructor(private courseCategoryService: CourseCategoryService) {}

    ngOnInit(): void {
        this.courseCategoryService.get().subscribe((categories) => {
            this.categories = categories.items;
        });
    }


}
