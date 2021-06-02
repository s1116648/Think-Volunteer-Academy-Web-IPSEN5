import { Component, NgModule, OnInit } from "@angular/core";
import { CourseCategory } from "../../course-category/course-category.model";
import { CourseCategoryService } from "../../course-category/course-category.service";

@Component({
    selector: "app-courses-overview",
    templateUrl: "./courses-overview.component.html",
    styleUrls: ["./courses-overview.component.scss"]
})
export class CoursesOverviewComponent implements OnInit {

    courseCategories: CourseCategory[];

    constructor(private courseCategoryService: CourseCategoryService) {}

    ngOnInit(): void {
        this.courseCategoryService.get().subscribe((categories) => {
            this.courseCategories = categories.items;
        });
    }


}
