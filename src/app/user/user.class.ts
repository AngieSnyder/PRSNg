export class User{
    id: number;
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    admin: boolean;
    reviewer: boolean;

    constructor() {
        this.id = 0;
        this.admin = false;
        this.reviewer = false;
    }
}