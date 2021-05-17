export interface HttpPaginatedResult<T> {
	pagination: {
		currentPage: number;
		totalPages: number;
		pageSize: number;
		totalItems: number;
	};
	items: T;
}
