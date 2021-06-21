import { Course } from "../course/course.model";

export interface Certificate {
	userId: string;
	course: Course;
	createdAt: Date;
	updatedAt: Date;
}
