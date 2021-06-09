import {Lesson} from "../lesson/lesson.model";
import {User} from "../user/user.model";

export interface Badge {
    lesson: Lesson;
    user: User;
    createdAt: Date;
    updatedAt: Date;
    achievedAt: Date;
    lessonNumber: number;
}
