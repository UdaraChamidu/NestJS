import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    signin() {
        return {msg: 'i am login'};
    }
    signup() {
        return {msg: 'i am signup'};
    }
}


