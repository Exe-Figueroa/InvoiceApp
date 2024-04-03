import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';


@Schema()
export class User extends Document {
  @Prop({ required: false })
  createdAt: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: false })
  name: string;

  @Prop({ required: false })
  street: string;

  @Prop({ required: false })
  city: string;

  @Prop({ required: false })
  postCode: string;

  @Prop({ required: false })
  country: string;

}


export const UserSchema = SchemaFactory.createForClass(User);

