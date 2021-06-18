import { Component, OnInit } from "@angular/core";
import { Test } from "../model/test.model";
import { ActivatedRoute, Params } from "@angular/router";
import { TestService } from "../services/test.service";
import { CourseService } from "../../course/course.service";
import { LessonService } from "../../lesson/lesson.service";
import { Course } from "../../course/course.model";
import { Lesson } from "../../lesson/lesson.model";
import { faChevronRight, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { SubmitAnswerDTO } from "../dto/submit-answer.dto";
import { SubmitTestDTO } from "../dto/submit-test.dto";
import { TestResultModel } from "../model/test-result.model";

@Component({
    selector: "app-screen-test",
    templateUrl: "./test-screen.component.html",
    styleUrls: ["./test-screen.component.scss"]
})
export class TestScreenComponent implements OnInit {
    icons = { faGraduationCap, faChevronRight };

    testId: string;
    courseName: string;
    lessonName: string;
    lessonLength: number;
    test: Test;

    constructor(
        private route: ActivatedRoute,
        private testService: TestService,
        private courseService: CourseService,
        private lessonService: LessonService
    ) {
    }

    ngOnInit(): void {
        this.initialiseFromRoute();
    }

    initialiseFromRoute(): void {
        this.route.params.subscribe((params: Params) => {
            this.initialiseCourseName(params.courseId);
            if (params.lessonId) {
                this.initialiseLessonInformation(params.lessonId);
            }
            this.initialiseTest(params.testId);
        });
    }

    initialiseCourseName(courseId: string): void {
        this.courseService.getByID(courseId).subscribe((course: Course) => {
            this.courseName = course.name;
        });
    }

    initialiseLessonInformation(lessonId: string): void {
        this.lessonService.getById(lessonId).subscribe((lesson: Lesson) => {
            this.lessonName = lesson.name;
            this.lessonLength = lesson.length;
        });
    }

    initialiseTest(testId: string): void {
        this.testService.getTestByID(testId).subscribe((test: Test) => {
            this.test = test;
        });
    }

    checkTestButtonClicked(): void {
        this.submitAnswers(this.generateSubmitAnswerDTO());
    }

    submitAnswers(submitTestDTO: SubmitTestDTO): void {
        console.log(submitTestDTO);
        this.testService.submitAnswers(this.test.id, submitTestDTO)
            .subscribe((testResultModel: TestResultModel) => {
                console.log(testResultModel);
            });
    }

    generateSubmitAnswerDTO(): SubmitTestDTO {
        return {
            answers: this.test.questions.map((question) => {
                return {
                    questionId: question.id,
                    answers: question.answers.filter((answer) => answer.checked).map((answer) => answer.id)
                } as SubmitAnswerDTO;
            })
        };
    }
}
