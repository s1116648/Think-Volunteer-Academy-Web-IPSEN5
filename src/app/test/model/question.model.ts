import { Answer } from "./answer.model";

export interface Question {
	id: string;
	text: string;
	answers: Answer[];
	updatedAt: Date;
	createdAt: Date;
	testId: string;
}
