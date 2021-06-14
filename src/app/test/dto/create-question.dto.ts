import { Answer } from "../answer.model";

export interface CreateQuestionDTO {
    text: string;
    answers: Answer[];
}
