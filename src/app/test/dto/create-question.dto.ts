import {UpdateAnswerDTO} from "./update-answer.dto";

export interface CreateQuestionDTO {
    text: string;
    answers: UpdateAnswerDTO[];
}
