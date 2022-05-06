"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const typeormConfig = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    ssl: true,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
};
module.exports = Object.assign(Object.assign({}, typeormConfig), { seeds: [__dirname + '/../database/**/*.seed{.ts,.js}'], factories: [__dirname + '/../database/**/*.factory{.ts,.js}'] });
//# sourceMappingURL=connection.js.map