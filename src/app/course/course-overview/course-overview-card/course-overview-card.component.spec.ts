import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CourseOverviewCardComponent } from "./course-overview-card.component";

describe("CourseOverviewCardComponent", () => {
	let component: CourseOverviewCardComponent;
	let fixture: ComponentFixture<CourseOverviewCardComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CourseOverviewCardComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CourseOverviewCardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
