import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class Item extends Document {
    @Prop({ isRequired: true })
    name: string

    @Prop({ isRequired: true })
    price: number

    @Prop({ isRequired: true })
    quantity: number

    @Prop({ isRequired: false })
    total: number
}

export const ItemSchema = SchemaFactory.createForClass(Item);
