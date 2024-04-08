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
  async refreshAccessToken(@Body() body) {
    return this.authServices.refreshAccessToken(body.token);
  }

  // @Post('validate-token')
  // async validateToken(@Body() body ) {
  //   return this.authServices.validatedToken( body.token ); 
  // }
}
