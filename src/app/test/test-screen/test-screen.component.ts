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
import { TestResultsModel } from "../model/test-results.model";

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
    lessonIndex: number;
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
            this.lessonIndex = lesson.index;
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
            .subscribe((testResultsModel: TestResultsModel) => {
                this.processTestResult(testResultsModel);
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

    processTestResult(testResultsModel: TestResultsModel): void {
        if (!testResultsModel.passed) {
            this.showFailedTest();
            return;
        }
        this.showTestCompleted();
    }

    showFailedTest(): void {
        this.showPopUp();
        this.setDisplayOfElement("failed-test", "initial");
    }

    showTestCompleted(): void {
        this.showPopUp();
        if (this.lessonName) {
            this.setDisplayOfElement("earned-badge", "initial");
            return;
        }
        this.setDisplayOfElement("earned-certificate", "initial");
    }

    showPopUp(): void {
        this.showBlur();
        this.setDisplayOfElement("pop-up-wrapper", "block");
    }

    hidePopUp(): void {
        this.hideBlur();
        this.hideText();
        this.setDisplayOfElement("pop-up-wrapper", "none");
    }

    showBlur(): void {
        this.setDisplayOfElement("shadow-background", "block");
    }

    hideBlur(): void {
        this.setDisplayOfElement("shadow-background", "none");
    }

    hideText(): void {
        this.setDisplayOfElement("earned-badge", "none");
        this.setDisplayOfElement("earned-certificate", "none");
        this.setDisplayOfElement("failed-test", "none");
    }

    setDisplayOfElement(elementId, displayValue): void {
        document.getElementById(elementId).style.display = displayValue;
    }
}
