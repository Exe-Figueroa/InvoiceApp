import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dtos/users.dtos';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

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
  create(@Body() body: CreateUserDto ) {
    const date = new Date();
    return this.usersService.create(body)
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  remove(@Param() params: any) {
    return this.usersService.remove(params.id)
  }

}
