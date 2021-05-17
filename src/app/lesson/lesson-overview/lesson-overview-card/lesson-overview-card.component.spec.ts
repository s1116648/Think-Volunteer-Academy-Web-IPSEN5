import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LessonOverviewCardComponent } from "./lesson-overview-card.component";

describe("LessonOverviewCardComponent", () => {
  let component: LessonOverviewCardComponent;
  let fixture: ComponentFixture<LessonOverviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonOverviewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonOverviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
