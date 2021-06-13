import { Answer } from "./answer.model";

export interface Question {
    id: string;
    text: string;
    Answers: Answer[];
    updatedAt: Date;
    createdAt: Date;
}
