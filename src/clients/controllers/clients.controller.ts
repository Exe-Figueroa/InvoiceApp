import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ClientsService } from '../services/clients.service';
import { CreateClientDto } from '../dtos/clients.dtos';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('clients')
export class ClientsController {
  constructor(private usersService: ClientsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  findOne(@Param() params: any) {
    return this.usersService.findOne(params.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() body: CreateClientDto ) {
    const date = new Date();
    return this.usersService.create(body)
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  remove(@Param() params: any) {
    return this.usersService.remove(params.id)
  }

}
