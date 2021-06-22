export interface Answer {
	id: string;
	text: string;
	correct: boolean;
	questionId: string;
	updatedAt: Date;
	createdAt: Date;
	checked?: boolean;
}
