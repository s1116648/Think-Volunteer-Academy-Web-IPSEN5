import { Injectable } from "@angular/core";
import {Test} from "./test.model";

@Injectable({
	providedIn: "root",
})
export class TestService {
	test: Test = {
		id: "1",
		questions: [{
			id: "1",
			text: "vraag 1",
			answers: [{
				id: "1",
				text: "Antwoord 1",
				correct: false,
				QuestionId: "1",
				updatedAt: new Date("1"),
				createdAt: new Date("1"),
			},
				{
					id: "2",
					text: "Antwoord 2",
					correct: false,
					QuestionId: "1",
					updatedAt: new Date("1"),
					createdAt: new Date("1"),
				}],
			updatedAt: new Date("1"),
			createdAt: new Date("1"),
		},
			{
				id: "2",
				text: "vraag 2",
				answers: [{
					id: "1",
					text: "Antwoord 1 vraag 2",
					correct: true,
					QuestionId: "1",
					updatedAt: new Date("1"),
					createdAt: new Date("1"),
				}],
				updatedAt: new Date("1"),
				createdAt: new Date("1"),
			}],
		updatedAt: new Date("1"),
		createdAt: new Date("1"),
	};
}
