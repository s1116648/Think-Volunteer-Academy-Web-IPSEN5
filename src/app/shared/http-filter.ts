export enum OrderDirection {
	ASC = "ASC",
	DESC = "DESC",
}

export class HttpFilter {
	page?: number;
	size?: number;
	order?: string;
	orderDirection?: OrderDirection;
}
