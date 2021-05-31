import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LessonDocumentsCardComponent } from "./lesson-documents-card.component";

describe("LessonDocumentsCardComponent", () => {
  let component: LessonDocumentsCardComponent;
  let fixture: ComponentFixture<LessonDocumentsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonDocumentsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonDocumentsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
