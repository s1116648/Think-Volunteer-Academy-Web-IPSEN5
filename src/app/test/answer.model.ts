import { Question} from "./question.model";

export interface Answer {
    id: string;
    text: string;
    correct: boolean;
    Question: Question;
    updatedAt: Date;
    createdAt: Date;
}
