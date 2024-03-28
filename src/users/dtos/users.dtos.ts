import { IsString, IsNotEmpty, IsDate, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  @IsDate()
  createdAt: Date;
  
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  street: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  postCode: string;

  @IsString()
  @IsNotEmpty()
  country: string;
}

