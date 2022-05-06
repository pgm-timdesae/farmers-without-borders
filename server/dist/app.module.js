"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const path_1 = require("path");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const categories_module_1 = require("./categories/categories.module");
const farmers_module_1 = require("./farmers/farmers.module");
const orders_module_1 = require("./orders/orders.module");
const payments_module_1 = require("./payments/payments.module");
const products_module_1 = require("./products/products.module");
const profiles_module_1 = require("./profiles/profiles.module");
const reviews_module_1 = require("./reviews/reviews.module");
const users_module_1 = require("./users/users.module");
const dotenv = require("dotenv");
dotenv.config();
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: (0, path_1.join)(process.cwd(), '.env'),
                isGlobal: true,
            }),
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                playground: true,
                introspection: true,
                buildSchemaOptions: {
                    dateScalarMode: 'timestamp',
                },
                sortSchema: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.get('DB_HOST'),
                    port: +configService.get('DB_PORT'),
                    username: configService.get('DB_USERNAME'),
                    password: configService.get('DB_PASSWORD'),
                    database: configService.get('DB_DATABASE'),
                    ssl: true,
                    entities: [__dirname + '/**/*.entity{.ts,.js}'],
                    seeds: [__dirname + '**/*.seed{.ts,.js}'],
                    factories: [__dirname + '**/*.factory{.ts,.js}'],
                    synchronize: true,
                }),
            }),
            auth_module_1.AuthModule,
            categories_module_1.CategoriesModule,
            farmers_module_1.FarmersModule,
            orders_module_1.OrdersModule,
            payments_module_1.PaymentsModule,
            products_module_1.ProductsModule,
            profiles_module_1.ProfilesModule,
            reviews_module_1.ReviewsModule,
            users_module_1.UsersModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map