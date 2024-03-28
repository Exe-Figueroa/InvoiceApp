import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schema/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dtos/users.dtos';

import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  async findAll() {
    const invoiceList = await this.userModel.find().exec();
    return invoiceList;
  }

  async findOne(userId: string): Promise<User> {
    const findUser = await this.userModel.findById({ _id: userId })
    if (!findUser) {
      throw new NotFoundException(`findUser- #${userId} not found`)
    }

    return findUser
  }

  async create(payload: CreateUserDto) {
    const salt = 10;
    const hash = await bcrypt.hash(payload.password, salt);
    
    const response = await this.userModel.create({
      ...payload,
      createdAt: new Date(),
      password: hash
    });
    return response;
  }

  async remove(userId: string): Promise<any> {
    return await this.userModel.findByIdAndDelete(userId)
  }
}
