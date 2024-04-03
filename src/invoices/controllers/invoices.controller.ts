import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { InvoicesService } from '../services/invoices.service';
import { CreateInvoiceDto, DraftInvoiceDto } from '../dtos/invoices.dtos';
import { EmailService } from 'src/email/services/email.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('invoices')
export class InvoicesController {
  constructor(
    private invoicesService: InvoicesService,
    private emailService: EmailService,
    ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query('limit') limit: number, @Query('offset') offset: number) {
    return this.invoicesService.findAll(limit, offset);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/drafts')
  findAllDrafts(@Query('limit') limit: number, @Query('offset') offset: number) {
    return this.invoicesService.findAllDrafts(limit, offset);
  }
  
  @UseGuards(JwtAuthGuard)
  @Get(":id")
  getOne(@Param() params: any ) {
    return this.invoicesService.findOne(params.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() body: CreateInvoiceDto) {
    const response = await this.invoicesService.create(body);
    if (response._id) {
      await this.emailService.sendEmail(response); 
    }
    return response;
  }
  @UseGuards(JwtAuthGuard)
  @Post('/drafts')
  async createDraft(@Body() body: DraftInvoiceDto) {
    const response = await this.invoicesService.createDraft(body);    
    return response;
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  remove(@Param() params: any ) {
    return this.invoicesService.remove(params.id)
  }
  
  @UseGuards(JwtAuthGuard)
  @Delete("/drafts/:id")
  removeDraft(@Param() params: any ) {
    return this.invoicesService.removeDraft(params.id)
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Param() params: any, @Body() body: DraftInvoiceDto){
    const updatedInvoice = await this.invoicesService.patch(body, params.id);

    if (body.status === 'paid') {
      this.emailService.sendPaidEmail(updatedInvoice)
    }
    
    return updatedInvoice;
  }
}