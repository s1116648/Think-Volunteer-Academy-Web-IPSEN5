import {Injectable} from "@angular/core";
import {Lesson} from "./lesson.model";

@Injectable()
export class LessonService {
  private lessons: Lesson[] = [
    {
      id: 1,
      name: "Culture of Bali",
      image: "/assets/images/nature.jpeg",
      content: "test",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      updatedAt: "12-2-2010",
      createdAt: "231123",
    },
    {
      id: 2,
      name: "Culture of Bali",
      image: "/assets/images/nature.jpeg",
      content: "test",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      updatedAt: "12-2-2010",
      createdAt: "231123",
    },
    {
      id: 3,
      name: "Culture of Bali",
      image: "/assets/images/nature.jpeg",
      content: "test",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      updatedAt: "12-2-2010",
      createdAt: "231123",
    },
    {
      id: 4,
      name: "Culture of Bali",
      image: "/assets/images/nature.jpeg",
      content: "test",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      updatedAt: "12-2-2010",
      createdAt: "231123",
    }

  ];
  constructor() {}

  getLessons(): Lesson[] {
    return this.lessons.slice();
  }
}
