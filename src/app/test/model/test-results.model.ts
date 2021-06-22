import { Question } from "./question.model";

export interface TestResultsModel {
    test: string;
    user: string;
    passed: boolean;
    questions: Question[];
}
