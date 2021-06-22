import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {fakeAsync, TestBed, tick} from "@angular/core/testing";
import {TestService} from "../app/test/services/test.service";
import {HttpRequest} from "@angular/common/http";

describe("Test service", () => {
    let httpTestingController: HttpTestingController;
    let service: TestService;

    const mockTest = {
        id: "1",
        questions: [
            {
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
                   }
               ],
                testId: "1",
                updatedAt: new Date("1"),
                createdAt: new Date("1")
            },
            {
                id: "2",
                text: "Vraag 2",
                answers: [
                    {
                        id: "1",
                        text: "Antwoord 1",
                        correct: true,
                        questionId: "2",
                        updatedAt: new Date("1"),
                        createdAt: new Date("1")
                    },
                    {
                        id: "2",
                        text: "Antwoord 2",
                        correct: false,
                        questionId: "2",
                        updatedAt: new Date("1"),
                        createdAt: new Date("1")
                    }
                ],
                testId: "1",
                updatedAt: new Date("1"),
                createdAt: new Date("1")
            }
        ],
        updatedAt: new Date("1"),
        createdAt: new Date("1")
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [TestService]
        });
        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(TestService);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });

    it("should get a test by id", fakeAsync(() => {
        const mockTestId = "1";
        service.getTestByID(mockTestId)
            .subscribe((res) => {
                expect(res).toEqual(mockTest);
            });

        const req = httpTestingController.expectOne((request: HttpRequest<any>): boolean => {
            expect(request.url).toEqual(`/tests/${mockTestId}`);
            expect(request.method).toBe("GET");
            return true;
        });

        req.flush(mockTest);
        tick();
    }));
});
