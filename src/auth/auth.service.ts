import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    login() {
        return "User logged in";
    }
    signup() {
        return "User signed up";
    }
}


