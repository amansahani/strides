import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(): string {
    return this.authService.signup();
  }

  @Post('signin')
  signin(): string {
    return this.authService.signin();
  }
}
