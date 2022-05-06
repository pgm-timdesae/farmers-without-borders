import { ConnectionOptions } from 'typeorm';

import * as dotenv from 'dotenv';
dotenv.config();

const typeormConfig: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  ssl: true, // true for render.com
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true, // synchronize database schema, in production use migrations
};

// important to work with CLI.
module.exports = {
  ...typeormConfig,
  seeds: [__dirname + '/../database/**/*.seed{.ts,.js}'],
  factories: [__dirname + '/../database/**/*.factory{.ts,.js}'],
};
