import { User } from "../user/user.class";

export class Request {
    id: number;
	user: User;
	userId: number;
    description: string;
	justification: string;
	dateNeeded: string;
	deliveryMode: string;
	status: string;
	total: number;
	submittedDate: string;
	reasonForRejection: string;

	constructor() {
		this.id = 0;
		this.total = 0;
		this.dateNeeded = null;
		this.submittedDate = (new Date()).toLocaleDateString();
		this.status = "New";
	}
}
