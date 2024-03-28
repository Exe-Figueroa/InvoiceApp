import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { Client, Address, ProductItem } from '../dtos/invoices.dtos';

@Schema()
export class Invoice extends Document {
  @Prop({ required: true })
  createdAt: string;

  @Prop({ required: true })
  status: ('pending' | 'paid' | 'draft');

  @Prop({ required: true })
  total: number;

  @Prop({ required: true })
  paymentTerms: number;

  @Prop({ required: true })
  paymentDue: string;

  @Prop(
    raw(
      {
        clientName: { type: String },
        clientEmail: { type: String },
        street: { type: String },
        city: { type: String },
        postCode: { type: String },
        country: { type: String },
      }
    )
  )
  client: Client;
  @Prop(
    raw(
      {
        street: { type: String },
        city: { type: String },
        postCode: { type: String },
        country: { type: String },
      }
    )
  )
  user: Address;

  @Prop(
    raw([
      {
        name: { type: String },
        quantity: { type: Number },
        price: { type: Number },
        total: { type: Number },
      },
    ])
  )
  items: ProductItem[];

  @Prop({ required: true })
  id: String;

}

@Schema()
export class DraftInvoice extends Document {
  @Prop({ required: false })
  createdAt: string;

  @Prop({ required: false })
  status: ('pending' | 'paid' | 'draft');

  @Prop({ required: false })
  total: number;

  @Prop({ required: false })
  paymentTerms: number;

  @Prop({ required: false })
  paymentDue: string;

  @Prop(
    { required: false,
      raw: (
      {
        clientName: {  type: String },
        clientEmail: { type: String },
        street: { type: String },
        city: { type: String },
        postCode: { type: String },
        country: { type: String },
      }
    )}
  )
  client: Client;
  @Prop(
   { required: false,
    raw: (
      {
        street: {  type: String },
        city: {  type: String },
        postCode: {  type: String },
        country: {  type: String },
      }
    )}
  )
  user: Address;

  @Prop(
    { 
      required: false,
      raw:([
      {
        name: {  type: String },
        quantity: { type: Number },
        price: { type: Number },
        total: { type: Number },
      },
    ])}
  )
  items: ProductItem[];

  @Prop({ required: false })
  id: String;

}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
export const DraftInvoiceSchema = SchemaFactory.createForClass(DraftInvoice);
