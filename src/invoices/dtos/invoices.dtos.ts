import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, IsOptional, IsObject, IsNotEmptyObject, IsArray, ValidateNested } from 'class-validator'

export class Address {
  @IsNotEmpty()
  @IsString()
  street: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  postCode: string;

  @IsNotEmpty()
  @IsString()
  country: string;
}
export class Client extends Address {
  @IsNotEmpty()
  @IsString()
  clientName: string;

  @IsNotEmpty()
  @IsString()
  clientEmail: string;
}

export class ProductItem {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsNumber()
  total: number;
}

export class CreateInvoiceDto {
  // @IsNotEmpty()
  // @IsString()
  // description: string;

  @IsOptional()
  @IsString()
  status: ('pending' | 'paid' | 'draft');

  @IsNotEmpty()
  @IsNumber()
  total: number;
  
  @IsNotEmpty()
  @IsNumber()
  paymentTerms: number;

  @IsNotEmpty()
  @IsString()
  paymentDue: string;

  @IsNotEmpty()
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested({ each: true })
  @Type(() => Client)
  client: Client;

  @IsNotEmpty()
  @IsObject()
  @IsNotEmptyObject()
  @Type(() => Address)
  @ValidateNested({ each: true })
  user: Address

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductItem)
  items: ProductItem[];

  @IsOptional()
  @IsString()
  id: string
}


// export class DraftInvoiceDto {
//   @IsOptional()
//   @IsString()
//   status: ('pending' | 'paid' | 'draft');

//   @IsOptional()
//   @IsNumber()
//   total: number;
  
//   @IsOptional()
//   @IsNumber()
//   paymentTerms: number;

//   @IsOptional()
//   @IsString()
//   paymentDue: string;

//   @IsOptional()
//   @ValidateNested({ each: true })
//   @Type(() => Client)
//   client: Client;

//   @IsOptional()
//   @Type(() => Address)
//   @ValidateNested({ each: true })
//   user: Address

//   @IsOptional()
//   @ValidateNested({ each: true })
//   @Type(() => ProductItem)
//   items: ProductItem[];

//   @IsOptional()
//   @IsString()
//   id: string
// }



export interface DraftInvoiceDto extends Partial<CreateInvoiceDto> { }