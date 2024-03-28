import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
    database: {
      name: process.env.DATABASE_NAME,
      port: process.env.DATABASE_PORT,
    },
    mongo: {
      uri: process.env.DATABASE_URI,
      connection: process.env.DATABASE_CONNECTION,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      dbName: process.env.DATABASE_NAME,
    },
    nodemailer: {
      user: process.env.USERNAME_EMAIL,
      password: process.env.PASSWORD_EMAIL
    }
  })
);
