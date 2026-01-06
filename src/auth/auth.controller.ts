import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private AuthService: AuthService) {}; // Dependency Injection: pass to services

    // end points for signup and signin
    @Post('signup')  // because of the global, route= /auth/signup
    signup() {
        return {msg: 'i am signup'}
    }
     
    @Post('signin')
    signin() {
        return {msg: 'i am signin'}
    }
}

