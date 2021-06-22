import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {fakeAsync, TestBed, tick} from "@angular/core/testing";
import {QuestionService} from "../app/test/services/question.service";
import {Question} from "../app/test/model/question.model";
import {HttpRequest} from "@angular/common/http";
import {CreateQuestionDTO} from "../app/test/dto/create-question.dto";
import {UpdateQuestionDTO} from "../app/test/dto/update-question.dto";

describe("Question service", () => {
    let httpTestingController: HttpTestingController;
    let service: QuestionService;

    const mockQuestion: Question = {
        id: "1",
        text: "Vraag 1",
        answers: [
            {
                id: "1",
                text: "Antwoord 1",
                correct: true,
                questionId: "1",
                updatedAt: new Date("1"),
                createdAt: new Date("1")
            },
            {
                id: "2",
                text: "Antwoord 2",
                correct: false,
                questionId: "1",
                updatedAt: new Date("1"),
                createdAt: new Date("1")
            }],
        testId: "1",
        updatedAt: new Date("1"),
        createdAt: new Date("1")
    };

    const updatedMockQuestion: Question = {
        id: "1",
        text: "Updated question",
        answers: [
            {
                id: "1",
                text: "Updated answer 1",
                correct: true,
                questionId: "1",
                updatedAt: new Date("1"),
                createdAt: new Date("1")
            },
            {
                id: "2",
                text: "Updated answer 2",
                correct: false,
                questionId: "1",
                updatedAt: new Date("1"),
                createdAt: new Date("1")
            }],
        testId: "1",
        updatedAt: new Date("1"),
        createdAt: new Date("1")
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [QuestionService]
        });
        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(QuestionService);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });

    it("should create a question", fakeAsync(() => {
        const mockQuestionId = "1";
        const mockQuestionDTO: CreateQuestionDTO = {
            text: "Vraag 1",
            answers: [
                {
                    text: "Antwoord 1",
                    correct: true,
                },
                {
                    text: "Antwoord 2",
                    correct: false,
                }]

        };

        service.create(mockQuestionId, mockQuestionDTO)
            .subscribe((question: Question) => {
                expect(question.text).toEqual(mockQuestion.text);
                expect(question.answers[0].text).toEqual(mockQuestionDTO.answers[0].text);
                expect(question.answers[0].correct).toEqual(mockQuestionDTO.answers[0].correct);
                expect(question.answers[1].text).toEqual(mockQuestionDTO.answers[1].text);
                expect(question.answers[1].correct).toEqual(mockQuestionDTO.answers[1].correct);

            });

        const req = httpTestingController.expectOne((request: HttpRequest<any>): boolean => {
            expect(request.url).toEqual(`/tests/${mockQuestionId}/questions`, mockQuestionDTO);
            expect(request.method).toBe("POST");
            return true;
        });

        req.flush(mockQuestion);
        tick();
    }));

    it("should delete a question by id", fakeAsync(() => {
        const mockQuestionId = "1";

        service.delete(mockQuestionId).subscribe();

        const req = httpTestingController.expectOne((request: HttpRequest<any>): boolean => {
            expect(request.url).toEqual(`/questions/${mockQuestionId}`);
            expect(request.method).toBe("DELETE");
            return true;
        });

        req.flush(mockQuestion);
        tick();
    }));

    it("should update a question by id", fakeAsync(() => {
        const mockQuestionId = "1";
        const mockUpdateQuestionDTO: UpdateQuestionDTO = {
            text: "Updated question",
            answers: [
                {
                    text: "Updated answer 1",
                    correct: true,
                },
                {
                    text: "Updated answer 2",
                    correct: false,
                }]
        };

        service.update(mockQuestionId, mockUpdateQuestionDTO)
            .subscribe((question: Question) => {
                expect(question.text).toEqual(mockUpdateQuestionDTO.text);
                expect(question.answers[0].text).toEqual(mockUpdateQuestionDTO.answers[0].text);
                expect(question.answers[0].correct).toEqual(mockUpdateQuestionDTO.answers[0].correct);
                expect(question.answers[1].text).toEqual(mockUpdateQuestionDTO.answers[1].text);
                expect(question.answers[1].correct).toEqual(mockUpdateQuestionDTO.answers[1].correct);
            });

        const req = httpTestingController.expectOne((request: HttpRequest<any>): boolean => {
            expect(request.url).toEqual(`/questions/${mockQuestionId}`, mockUpdateQuestionDTO);
            expect(request.method).toBe("PATCH");
            return true;
        });

        req.flush(updatedMockQuestion);
        tick();
    }));

});
