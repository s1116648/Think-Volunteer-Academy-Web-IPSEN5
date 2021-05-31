import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LessonInfoCardComponent } from "./lesson-info-card.component";

describe("LessonInfoCardComponent", () => {
  let component: LessonInfoCardComponent;
  let fixture: ComponentFixture<LessonInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonInfoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
