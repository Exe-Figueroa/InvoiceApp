// import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
// import { ConfigModule } from '@nestjs/config';
import * as cors from 'cors'; //

// import { InvoicesModule } from 'src/invoices/modules/invoices.module';
// import { AppController } from '../controllers/app.controller';
// import config from '../../config';
// import { UsersModule } from 'src/users/modules/users.module';
// import { DatabaseModule } from 'src/database/database/database.module';
// import { EmailService } from 'src/email/services/email.service';
// import { ItemsModule } from 'src/items/modules/items.module';
// import { AuthModule } from 'src/auth/module/auth.module';
// import { ClientsModule } from 'src/clients/modules/clients.module';

// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       envFilePath: '.env',
//       load: [config],
//       isGlobal: true,
//     }),
//     AuthModule,
//     InvoicesModule,
//     UsersModule,
//     ItemsModule,
//     DatabaseModule,
//     ClientsModule
//   ],

//   controllers: [AppController],
//   providers: [EmailService],
// })
// export class AppModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(
//         cors(),
//       )
//       .forRoutes({ path: '*', method: RequestMethod.ALL });
//   }
// }


import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { InvoicesModule } from 'src/invoices/modules/invoices.module';
import { AppController } from '../controllers/app.controller';
import config from '../../config';
import { UsersModule } from 'src/users/modules/users.module';
import { DatabaseModule } from 'src/database/database/database.module';
import { EmailService } from 'src/email/services/email.service';
import { ItemsModule } from 'src/items/modules/items.module';
import { AuthModule } from 'src/auth/module/auth.module';
import { ClientsModule } from 'src/clients/modules/clients.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [config],
      isGlobal: true,
    }),
    AuthModule,
    InvoicesModule,
    UsersModule,
    ItemsModule,
    DatabaseModule,
    ClientsModule
  ],
  controllers: [AppController],
  providers: [EmailService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(cors()) // Aquí aplicamos el middleware de CORS
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
