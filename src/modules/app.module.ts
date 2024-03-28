import { Module } from '@nestjs/common';
import { AppController } from 'src/app/controllers/app.controller';
import { AppService } from 'src/app/services/app.service';


@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
    