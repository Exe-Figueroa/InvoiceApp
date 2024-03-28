import { IsString, IsNotEmpty, IsDate, IsOptional } from 'class-validator';

export class loginUserDto {
  @IsOptional()
  @IsDate()
  createdAt: Date;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

}

