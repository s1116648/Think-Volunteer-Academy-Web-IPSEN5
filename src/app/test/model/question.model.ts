import { Answer } from "./answer.model";
import { Test } from "./test.model";

export interface Question {
	id: string;
	text: string;
	answers: Answer[];
	updatedAt: Date;
	createdAt: Date;
	test: Test;
	testId: string;
}
