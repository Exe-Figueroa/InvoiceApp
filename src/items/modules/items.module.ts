import { Module } from '@nestjs/common';

import { ItemSchema, Item } from '../schema/items.schema';
import { ItemsService } from '../services/items.service';
import { ItemsController } from '../controllers/items.controller';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
    imports: [MongooseModule.forFeature([
        {
            name: Item.name,
            schema: ItemSchema
        }
    ])],
    providers: [ItemsService],
    controllers: [ItemsController]
})
export class ItemsModule{}