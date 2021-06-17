import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {LessonService} from "../app/lesson/lesson.service";
import {fakeAsync, TestBed, tick} from "@angular/core/testing";
import {HttpRequest} from "@angular/common/http";
import {Lesson} from "../app/lesson/lesson.model";
import {CreateLessonDTO} from "../app/lesson/dto/create-lesson.dto";
import {UpdateLessonDTO} from "../app/lesson/dto/update-lesson.dto";

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
                index: 1,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                length: 1,
                courseId: "1",
                quizId: "1",
                updatedAt: new Date("1"),
                createdAt: new Date("1"),
            },
            {
                id: "2",
                name: "Culture of Bali",
                image: "google.com",
                content: "test",
                index: 2,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                length: 1,
                courseId: "1",
                quizId: "1",
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
                index: 1,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                length: 1,
                quizId: "1",
                courseId: "1",
                updatedAt: new Date("1"),
                createdAt: new Date("1"),
            };


        service.getById(mockLessonId)
            .subscribe((responseData) => {
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

    it("should swap a lessons index", fakeAsync(() => {
        const newIndex = 2;
        const mockLesson =
            {
                id: "1",
                name: "Culture of Bali",
                image: "google.com",
                content: "test",
                index: 1,
                quizId: "1",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                length: 1,
                courseId: "1",
                updatedAt: new Date("1"),
                createdAt: new Date("1"),
            };

        const returnedMockLesson =
            {
                id: "1",
                name: "Culture of Bali",
                image: "google.com",
                content: "test",
                index: 2,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                length: 1,
                quizId: "1",
                courseId: "1",
                updatedAt: new Date("1"),
                createdAt: new Date("1"),
            };
        service.swap(mockLesson, newIndex)
            .subscribe((responseData: Lesson[]) => {
                expect(responseData[0].index).toEqual(2);
                tick();
            });

        const req = httpTestingController.expectOne((request: HttpRequest<any>): boolean => {
            expect(request.url).toEqual(`/lessons/${mockLesson.id}/order`, newIndex);
            expect(request.method).toBe("PATCH");
            return true;
        });

        req.flush([returnedMockLesson]);
        tick();
    }));

    it("should create a lesson", fakeAsync(() => {
        const mockCourseId = "1";
        const toPostMockLessonDto: CreateLessonDTO =
            {
                name: "string",
                content: "string",
                description: "string",
                image: "string",
                length: 0,
                courseId: "1"
            };
        const returnedLesson: Lesson =
            {
                id: "1",
                name: "string",
                image: "1",
                content: "string",
                index: 1,
                description: "string",
                length: 0,
                courseId: "1",
                quizId: "1",
                updatedAt: new Date("1"),
                createdAt: new Date("1")
            };

        service.create(mockCourseId, toPostMockLessonDto)
            .subscribe((lesson: Lesson) => {
                expect(lesson.name).toEqual(returnedLesson.name);
                expect(lesson.content).toEqual(returnedLesson.content);
                expect(lesson.description).toEqual(returnedLesson.description);
                expect(lesson.image).toEqual(returnedLesson.image);
                expect(lesson.length).toEqual(returnedLesson.length);
                expect(lesson.courseId).toEqual(returnedLesson.courseId);
            });

        const req = httpTestingController.expectOne((request: HttpRequest<any>): boolean => {
            expect(request.url).toEqual(`/courses/${mockCourseId}/lessons`, toPostMockLessonDto);
            expect(request.method).toBe("POST");
            return true;
        });

        req.flush(returnedLesson);
        tick();
    }));

    it("should update a lesson", fakeAsync(() => {
        const mockLesson =
            {
                id: "1",
                name: "Culture of Bali",
                image: "google.com",
                content: "test",
                index: 1,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                length: 1,
                courseId: "1",
                updatedAt: new Date("1"),
                createdAt: new Date("1"),
            };

        const updateLessonDto: UpdateLessonDTO =
            {
                name: "New Name",
                content: "New content",
                description: "New Description",
                image: "New Image",
                length: 0
            };

        const returnedMockLesson =
            {
                id: "1",
                name: "New Name",
                image: "New Image",
                content: "New content",
                index: 1,
                description: "New Description",
                length: 0,
                courseId: "1",
                updatedAt: new Date("1"),
                createdAt: new Date("1"),
            };

        service.update(mockLesson.id, updateLessonDto)
            .subscribe((responseData: Lesson) => {
                expect(responseData.name).toEqual(updateLessonDto.name);
                expect(responseData.content).toEqual(updateLessonDto.content);
                expect(responseData.description).toEqual(updateLessonDto.description);
                expect(responseData.image).toEqual(updateLessonDto.image);
                expect(responseData.length).toEqual(updateLessonDto.length);
            });

        const req = httpTestingController.expectOne((request: HttpRequest<any>): boolean => {
            expect(request.url).toEqual(`/lessons/${mockLesson.id}`, updateLessonDto);
            expect(request.method).toBe("PATCH");
            return true;
        });

        req.flush(returnedMockLesson);
        tick();
    }));
});
