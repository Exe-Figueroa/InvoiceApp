import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { InvoicesController } from '../controllers/invoices.controller';
import { InvoicesService } from '../services/invoices.service';
import { DraftInvoice, DraftInvoiceSchema, Invoice, InvoiceSchema } from '../schema/invoice.schema';
import { EmailService } from 'src/email/services/email.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Invoice.name,
        schema: InvoiceSchema,
      },
      {
        name: DraftInvoice.name,
        schema: DraftInvoiceSchema,
      }
    ])
  ],
  controllers: [InvoicesController],
  providers: [InvoicesService, EmailService]
})
export class InvoicesModule {}
