import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';


@Schema()
export class Client extends Document {
    @Prop({ required: false })
    createdAt: string;

    @Prop({ required: true })
    clientEmail: string;

    @Prop({ required: false })
    clientName: string;

    @Prop({ required: false })
    street: string;

    @Prop({ required: false })
    city: string;

    @Prop({ required: false })
    postCode: string;

    @Prop({ required: false })
    country: string;
};


export const ClientSchema = SchemaFactory.createForClass(Client);

