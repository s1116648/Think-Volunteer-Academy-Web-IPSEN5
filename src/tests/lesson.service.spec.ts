import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {LessonService} from "../app/lesson/lesson.service";
import {fakeAsync, TestBed, tick} from "@angular/core/testing";
import {HttpRequest} from "@angular/common/http";

describe("Lesson service", () => {

    let httpTestingController: HttpTestingController;
    let service: LessonService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [LessonService]
        });
        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(LessonService);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });

    it("should fetch lessons ", fakeAsync(() => {
        const mockCourseId = "1";
        const mockLessons = [
            {
                id: "1",
                name: "Culture of Bali",
                image: "google.com",
                content: "test",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                length: 1,
                courseId: "1",
                updatedAt: new Date("1"),
                createdAt: new Date("1"),
            },
            {
                id: "2",
                name: "Culture of Bali",
                image: "google.com",
                content: "test",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                length: 1,
                courseId: "1",
                updatedAt: new Date("1"),
                createdAt: new Date("1"),
            },
        ];

        service.get(mockCourseId).subscribe((responseData) => {
            expect(responseData.items).toEqual(mockLessons);
        });

        const req = httpTestingController.expectOne((request: HttpRequest<any>): boolean => {
            expect(request.url).toEqual(`/courses/${mockCourseId}/lessons`);
            expect(request.method).toBe("GET");
            return true;
        });

        req.flush({pagination: 0, items: mockLessons});
        tick();
    }));

    it("should fetch a lesson by its id", fakeAsync(() => {
        const mockLessonId = "1";
        const mockLesson =
            {
                id: "1",
                name: "Culture of Bali",
                image: "google.com",
                content: "test",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                length: 1,
                courseId: "1",
                updatedAt: new Date("1"),
                createdAt: new Date("1"),
            };


        service.getById(mockLessonId).subscribe((responseData) => {
            expect(responseData).toEqual(mockLesson);
        });

        const req = httpTestingController.expectOne((request: HttpRequest<any>): boolean => {
            expect(request.url).toEqual(`/lessons/${mockLessonId}`);
            expect(request.method).toBe("GET");
            return true;
        });

        req.flush(mockLesson);
        tick();
    }));
});
