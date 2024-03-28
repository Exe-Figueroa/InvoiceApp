import { Body, Controller, Get, Headers, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { loginUserDto } from '../dtos/auth.dtos';

@Controller('auth')
export class AuthController {
  constructor (private authServices: AuthService){}

  @Post()
  loginUser(@Body() userLogin: loginUserDto){
    return this.authServices.login(userLogin)
  }

  @Post('refresh-token')
  async refreshAccessToken(@Body() refreshTokenDto: { refreshToken: string }) {
    return this.authServices.refreshAccessToken(refreshTokenDto.refreshToken);
  }

}
