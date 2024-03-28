import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Client } from '../schema/clients.schema';
import { Model } from 'mongoose';
import { CreateClientDto } from '../dtos/clients.dtos';

@Injectable()
export class ClientsService {
  constructor(@InjectModel(Client.name) private userModel: Model<Client>) { }

  async findAll() {
    const invoiceList = await this.userModel.find().exec();
    return invoiceList;
  }

  async findOne(userId: string): Promise<Client> {
    const findUser = await this.userModel.findById({ _id: userId })
    if (!findUser) {
      throw new NotFoundException(`findUser- #${userId} not found`)
    }

    return findUser
  }

  async create(payload: CreateClientDto) {
    const response = await this.userModel.create({
      ...payload,
      createdAt: new Date(),
    });
    return response;
  }

  async remove(userId: string): Promise<any> {
    return await this.userModel.findByIdAndDelete(userId)
  }
}
