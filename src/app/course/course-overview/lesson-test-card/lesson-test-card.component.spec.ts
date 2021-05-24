import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LessonTestCardComponent } from "./lesson-test-card.component";

describe("LessonTestCardComponent", () => {
	let component: LessonTestCardComponent;
	let fixture: ComponentFixture<LessonTestCardComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [LessonTestCardComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(LessonTestCardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
