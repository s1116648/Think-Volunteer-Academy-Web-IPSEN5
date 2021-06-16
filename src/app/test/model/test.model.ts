import { Question } from "./question.model";

export interface Test {
    id: string;
    questions: Question[];
    updatedAt: Date;
    createdAt: Date;
}
