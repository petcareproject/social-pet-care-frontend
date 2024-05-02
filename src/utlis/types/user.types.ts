export interface User {
	_id: string;
	userName: string;
	email: string;
	password: string;
	isDeleted: boolean;
	isVerified: boolean;
	__v: number;
}
