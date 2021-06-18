import { Course } from "../course/course.model";

export interface Certificate {
	course: Course;
	createdAt: Date;
	updatedAt: Date;
	achievedAt: Date;
}
