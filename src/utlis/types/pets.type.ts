export interface PetSearchResult {
	data: pet[];
	current: number;
	totalCount: number;
	pagination: Pagination;
	message: string;
}

export interface pet {
	_id: string;
	petName: string;
	petCategory: string;
	petBreeds: string;
	age: string;
	gender: string;
	dob: string;
	location: string;
	isDeleted: boolean;
	address: string;
	aboutPets: string;
	petProfile: any;
	uploadedBy: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
}

export interface Pagination {
	page: number;
	hasPrevious: boolean;
	previous: number;
	hasNext: boolean;
	next: number;
	totalPages: number;
}
