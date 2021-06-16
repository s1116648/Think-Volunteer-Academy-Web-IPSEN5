import {UpdateAnswerDTO} from "./update-answer.dto";

export interface UpdateQuestionDTO {
    text?: string;
    answers?: UpdateAnswerDTO[];
}

