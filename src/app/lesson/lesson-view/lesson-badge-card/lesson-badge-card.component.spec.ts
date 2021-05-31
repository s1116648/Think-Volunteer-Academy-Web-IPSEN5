import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LessonBadgeCardComponent } from "./lesson-badge-card.component";

describe("LessonBadgeCardComponent", () => {
  let component: LessonBadgeCardComponent;
  let fixture: ComponentFixture<LessonBadgeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonBadgeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonBadgeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
