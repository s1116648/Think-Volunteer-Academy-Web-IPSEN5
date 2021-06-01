import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {CourseService} from "../course.service";
import {fakeAsync, TestBed, tick} from "@angular/core/testing";
import {HttpRequest} from "@angular/common/http";

describe("Course service", () => {

    let httpTestingController: HttpTestingController;
    let service: CourseService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [CourseService]
        });
        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(CourseService);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });

    it("should fetch a course by id", fakeAsync(() => {
        const mockCourseId = "1";
        const mockCourse =
            {
                id: "1",
                name: "Course 1",
                description: "Introduction",
                image: "google.com",
                active: true,
                category: {
                    id: "1",
                    name: "Category 1",
                    createdAt: new Date("1"),
                    updatedAt: new Date("1")
                },
                createdAt: new Date("1"),
                updatedAt: new Date("1")
            };


        service.getByID(mockCourseId).subscribe((responseData) => {
            expect(responseData).toEqual(mockCourse);
        });

        const req = httpTestingController.expectOne((request: HttpRequest<any>): boolean => {
            expect(request.url).toEqual(`/courses/${mockCourseId}`);
            expect(request.method).toBe("GET");
            return true;
        });

        req.flush(mockCourse);
        tick();
    }));

});
