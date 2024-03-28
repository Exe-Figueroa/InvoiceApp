import { Controller, Get, Post } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  helloWorld(){
    return 'welcome to my server in NestJS 🚀'
  }
}
