import { Model } from 'mongoose';
import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/users/schema/user.schema';
import { loginUserDto } from '../dtos/auth.dtos';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService
    ) { }

  async login(userLogin: loginUserDto) {
    const { email, password } = userLogin;
    const findUser = await this.userModel.findOne({ email });

    if (!findUser){
      throw new HttpException('USER_NOT_FOUND', 404)
    }

    const matchPassword = await compare(password, findUser.password)
    
    if (!matchPassword){
      throw new HttpException('PASSWORD_INCORRECT', 403)
    }

    const accessTokenPayload = { id: findUser._id, name: findUser.name };
    const accessToken = this.jwtService.sign(accessTokenPayload);

    const refreshTokenPayload = { id: findUser._id };
    const refreshToken = this.jwtService.sign(refreshTokenPayload, { expiresIn: '2h' }); 
    
    const data = {
      user: {
        name: findUser.name,
        email: findUser.name,
        city: findUser.city
      },
      accessToken,
      refreshToken
    };

    return data;
  }


  async refreshAccessToken(refreshToken: string) {
    try {
      const decodedToken = this.jwtService.verify(refreshToken);
      const accessTokenPayload = { id: decodedToken.id };
      const accessToken = this.jwtService.sign(accessTokenPayload);

      return { accessToken };
    } catch (error) {
      throw new HttpException('TOKEN_INCORRECT', 401);
    }
  }


}
