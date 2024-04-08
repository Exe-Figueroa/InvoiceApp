import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateInvoiceDto, DraftInvoiceDto } from '../dtos/invoices.dtos';
import { DraftInvoice, Invoice } from '../schema/invoice.schema';

import { generarId } from 'generadorId';


@Injectable()
export class InvoicesService {
  constructor(
    @InjectModel(Invoice.name) private invoiceModel: Model<Invoice>,
    @InjectModel(DraftInvoice.name) private draftModel: Model<DraftInvoice>
    ) { }

  async findAll(limit?: number, offset?: number) {
    const invoiceList = await this.invoiceModel.find().sort({createdAt: 'asc'}).limit(limit).skip(offset).exec();
    return invoiceList;
  }

  async findAllDrafts(limit?: number, offset?: number) {
    const invoiceList = await this.draftModel.find().limit(limit).skip(offset).exec();
    return invoiceList;
  }

  async findOne(invoiceId: string): Promise<Invoice> {
    const findInvoice = await this.invoiceModel.findById({ _id: invoiceId })
    if (!findInvoice) {
      throw new NotFoundException(`findInvoice- #${invoiceId} not found`)
    }

    return findInvoice
  }

  async create(payload: CreateInvoiceDto) {
    const response = await this.invoiceModel.create({
      id: generarId(),
      createdAt: new Date(),
      status: 'pending',
      ...payload,
    });

    return response;
  }

  async createDraft(payload: DraftInvoiceDto) {
    const response = await this.draftModel.create({
      id: generarId(),
      createdAt: new Date(),
      status: 'draft',
      ...payload,
    });

    return response;
  }

  async remove(invoiceId: string): Promise<any> {
    return await this.invoiceModel.findByIdAndDelete(invoiceId)
  }
  async removeDraft(invoiceId: string): Promise<any> {
    return await this.draftModel.findByIdAndDelete(invoiceId)
  }

  async patch(payload: DraftInvoiceDto, id: string) {
    return (await this.invoiceModel.findByIdAndUpdate(id, { $set: payload }, { new: true }));
  }
  
}


