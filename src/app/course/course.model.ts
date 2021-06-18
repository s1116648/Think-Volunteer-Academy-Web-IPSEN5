import { CourseCategory } from "../course-category/course-category.model";

export interface Course {
	id: string;
	name: string;
	description: string;
	image: string;
	active: boolean;
	examId: string;
	category: CourseCategory;
	createdAt: Date;
	updatedAt: Date;
}
