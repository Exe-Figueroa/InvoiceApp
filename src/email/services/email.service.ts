import { config } from 'dotenv';
config();
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { Invoice } from 'src/invoices/schema/invoice.schema';
import { templateSendMail, paidInvoiceEmail } from 'utils/sendInvoiceMail';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      secure: false,
      auth: {
        user: process.env.USERNAME_EMAIL,
        pass: process.env.PASSWORD_EMAIL,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  async sendEmail(payload: Invoice): Promise<void> {
    const { client, id} = payload;

    const subject = `invoice ${id}`;
    const html = templateSendMail(payload);

    try {
      await this.transporter.sendMail({
        to: client.clientEmail,
        subject,
        html,
      });
      console.log('Invoice creado enviado');
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      throw error;
    }
  }
  async sendPaidEmail(payload: Invoice): Promise<void> {
    const { client, id} = payload;

    const subject = `invoice ${id}`;
    const html = paidInvoiceEmail(payload);

    try {
      await this.transporter.sendMail({
        to: client.clientEmail,
        subject,
        html,
      });
      console.log({client, id});
      
      console.log('Html template =>');
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      throw error;
    }
  }
}
