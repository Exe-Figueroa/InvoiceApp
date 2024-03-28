import { IsNotEmpty, IsNumber, IsString, IsOptional} from 'class-validator'


export class ItemDto {
    @IsNotEmpty()
    @IsString()
    name: string

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

export interface UpdateItemDto extends Partial<ItemDto>{}