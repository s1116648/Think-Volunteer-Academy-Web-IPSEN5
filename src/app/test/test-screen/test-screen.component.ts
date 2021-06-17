import { Component, Input, OnInit } from "@angular/core";
import { Test } from "../model/test.model";
import { ActivatedRoute, Params } from "@angular/router";
import { TestService } from "../services/test.service";
import { CourseService } from "../../course/course.service";
import { LessonService } from "../../lesson/lesson.service";
import { Course } from "../../course/course.model";
import { Lesson } from "../../lesson/lesson.model";
import { faChevronRight, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { SubmitAnswerDTO } from "../dto/submit-answer.dto";
import { Question } from "../model/question.model";

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
    givenAnswers: SubmitAnswerDTO[] = [];

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
        this.generateGivenAnswersFromDocument();
        console.log(this.givenAnswers);
    }

    generateGivenAnswersFromDocument(): void {
        this.checkQuestionsForGivenAnswers();
    }

    checkQuestionsForGivenAnswers(): void {
        for (let i = 0; i < this.test.questions.length; i++) {
            this.checkQuestionForGivenAnswers(this.test.questions[i]);
        }
    }

    checkQuestionForGivenAnswers(question: Question): void {
        for (let i = 0; i < question.answers.length; i++) {
            const currentAnswerId = question.answers[i].id;
            if (this.isCheckedInDocument(currentAnswerId)) {
                const answer: SubmitAnswerDTO = {
                    answerId: currentAnswerId,
                    questionId: question.id
                };
                this.givenAnswers[this.givenAnswers.length] = answer;
            }
        }
    }

    isCheckedInDocument(answerId): boolean {
        return document.getElementById(answerId).checked;
    }
}
