import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Item } from '../schema/items.schema';
import { ItemDto, UpdateItemDto } from '../dtos/items.dtos';

@Injectable()
export class ItemsService {
    constructor(@InjectModel(Item.name) private itemModel: Model<Item>) { }
    async findall() {
        const itemList = await this.itemModel.find().exec()
        return itemList
    }
    async findOne(id: string){
        return await this.itemModel.findById(id);
    }
    async patch(payload: UpdateItemDto, id: string) {
        try {
            const currentItem = await this.findOne(id);
            const itemToUpdate = await this.itemModel.findByIdAndUpdate(id, { $set: {...payload, quantity: currentItem.quantity - payload.quantity }}, { new: true });
            if (itemToUpdate.quantity === 0) {
                await this.itemModel.findByIdAndUpdate(id, {$set: {...payload, quantity: 20}});
            }
            return itemToUpdate
        } catch (error) {
            throw new HttpException('ITEM NOT FOUND', 404);
        }
    }
    async create(payload: ItemDto) {
        const res = await this.itemModel.create(payload)
        return res
    }
}
