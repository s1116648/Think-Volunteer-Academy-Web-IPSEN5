import {Answer} from "../answer.model";

export interface UpdateQuestionDTO {
    text?: string;
    answers?: Answer[];
}

