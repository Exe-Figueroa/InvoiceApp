import { IsString, IsNotEmpty, IsDate, IsOptional } from 'class-validator';

export class CreateClientDto {
  @IsOptional()
  @IsDate()
  createdAt: Date;
  
  @IsString()
  @IsNotEmpty()
  clientName: string;

  @IsString()
  @IsNotEmpty()
  clientEmail: string;

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

