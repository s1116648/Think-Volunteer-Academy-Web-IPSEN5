import {Injectable} from "@angular/core";
import {Lesson} from "../shared/models/lesson.model";

@Injectable()
export class LessonService {
  private lessons: Lesson[] = [
    new Lesson(1, "Culture of Bali", "/assets/images/nature.jpeg", "test", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "12-2-2010", "231123"),
    new Lesson(2, "Culture of Indonesia", "/assets/images/nature.jpeg", "test", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "12-2-2010", "231123"),
    new Lesson(3, "Culture of India", "/assets/images/nature.jpeg", "test", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "12-2-2010", "231123"),
    new Lesson(4, "Test1", "/assets/images/nature.jpeg", "test", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "12-2-2010", "231123"),
    new Lesson(5, "Test2", "/assets/images/nature.jpeg", "test", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "12-2-2010", "231123"),
    new Lesson(6, "Test3", "/assets/images/nature.jpeg", "test", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "12-2-2010", "231123")
  ];
  constructor() {}

  getLessons(): Lesson[] {
    return this.lessons.slice();
  }
}
