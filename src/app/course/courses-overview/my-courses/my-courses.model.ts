import { Course } from "../../course.model";
import { ProgressModel } from "./progress.model";

export interface MyCoursesModel {
    course: Course;
    progress: ProgressModel;
}
