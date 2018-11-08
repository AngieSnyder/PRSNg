import { User } from "../user/user.class";

export class Request {
    id: number;
    user: User;
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
		this.deliveryMode = "Pickup";
		this.submittedDate = (new Date()).toLocaleDateString();
		this.status = "New";
	}
}
