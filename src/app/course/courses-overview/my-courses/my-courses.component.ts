import { Component, OnInit } from "@angular/core";
import { Course } from "../../course.model";
import { CourseService } from "../../course.service";
import { Lesson } from "../../../lesson/lesson.model";

@Component({
  selector: "app-my-courses",
  templateUrl: "./my-courses.component.html",
  styleUrls: ["./my-courses.component.scss"]
})
export class MyCoursesComponent implements OnInit {

    courses: Course[] = [];
    rawCourseIds: string[] = []; // Duplicates are possible
    courseIds: string[] = []; // No duplicate version

    constructor(private courseService: CourseService) {}

    ngOnInit(): void {
        this.initialiseCourses();
    }

    initialiseCourses(): void {
        this.getBadges();
    }

    getBadges(): void {
        this.courseService.getBatchesFromActiveUser().subscribe(
            (batchData) => {
                this.fillInRawCourseIds(batchData);
                this.fillInCourses();
        });
    }

    fillInRawCourseIds(batchData: any): void {
        const batchLessons = batchData.items;
        for (let i = 0; i < batchLessons.length; i++) {
            this.rawCourseIds[i] = batchLessons[i].lesson.courseId;
            console.log(this.rawCourseIds);
        }
    }

    fillInCourses(): void {
        this.rawCourseIds.forEach(rawCourseId => {
            if (!(this.checkIfExistsInCourses(rawCourseId))) {
                this.addToCourseIds(rawCourseId);
                this.addCourse(rawCourseId);
                this.hideIfEmpty();
            }
        });
    }

    addToCourseIds(id: string): void {
        this.courseIds[this.courseIds.length] = id;
        console.log(this.courseIds);
    }

    checkIfExistsInCourses(id: string): boolean {
        let exists = false;
        this.courseIds.forEach(existingId => {
            if (existingId === id) {
                exists = true;
            }
        });
        console.log(exists);
        return exists;
    }

    addCourse(id: string): void {
        this.courseService.getByID(id).subscribe(
            (course) => {
                console.log(course);
                this.courses[this.courses.length] = course;
        });
    }

    hideIfEmpty(): void {
        if (this.courses.length === 0) {
            document.getElementById("my-courses").style.display = "hide";
        }
    }
}
