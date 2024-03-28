import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ItemsService } from '../services/items.service';
import { UpdateItemDto, ItemDto } from '../dtos/items.dtos';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('items')
export class ItemsController {
    constructor (private itemService: ItemsService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll(){
        return this.itemService.findall()
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    patch(@Param() params: any, @Body() payload: UpdateItemDto){
        return this.itemService.patch(payload, params.id)
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() body: ItemDto){
        return this.itemService.create(body)
    }
}
