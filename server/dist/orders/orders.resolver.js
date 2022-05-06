"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const dto_1 = require("./dto");
const order_entity_1 = require("./entities/order.entity");
const orders_service_1 = require("./orders.service");
let OrdersResolver = class OrdersResolver {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    orders() {
        return this.ordersService.findAll();
    }
    getOrder(id) {
        return this.ordersService.findOne(id);
    }
    createOrder(createOrderInput) {
        return this.ordersService.createOrder(createOrderInput);
    }
    updateOrder(updateOrderInput) {
        return this.ordersService.updateOrder(updateOrderInput);
    }
    deleteOrder(id) {
        return this.ordersService.deleteOrder(id);
    }
    addToOrder(orderId, productId) {
        return this.ordersService.addToOrder(orderId, productId);
    }
    removeFromOrder(orderId, productId) {
        return this.ordersService.removeFromOrder(orderId, productId);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [order_entity_1.Order]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrdersResolver.prototype, "orders", null);
__decorate([
    (0, graphql_1.Query)(() => order_entity_1.Order),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrdersResolver.prototype, "getOrder", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_entity_1.Order),
    __param(0, (0, graphql_1.Args)('createOrderInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateOrderInput]),
    __metadata("design:returntype", Promise)
], OrdersResolver.prototype, "createOrder", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_entity_1.Order),
    __param(0, (0, graphql_1.Args)('updateOrderInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UpdateOrderInput]),
    __metadata("design:returntype", Promise)
], OrdersResolver.prototype, "updateOrder", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_entity_1.Order),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrdersResolver.prototype, "deleteOrder", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_entity_1.Order, { name: 'addProductToOrder' }),
    __param(0, (0, graphql_1.Args)('orderId', { type: () => graphql_1.Int, nullable: false })),
    __param(1, (0, graphql_1.Args)('productId', { type: () => graphql_1.Int, nullable: false })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], OrdersResolver.prototype, "addToOrder", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_entity_1.Order, { name: 'removeProductToOrder' }),
    __param(0, (0, graphql_1.Args)('orderId', { type: () => graphql_1.Int, nullable: false })),
    __param(1, (0, graphql_1.Args)('productId', { type: () => graphql_1.Int, nullable: false })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], OrdersResolver.prototype, "removeFromOrder", null);
OrdersResolver = __decorate([
    (0, graphql_1.Resolver)((of) => order_entity_1.Order),
    __metadata("design:paramtypes", [orders_service_1.OrdersService])
], OrdersResolver);
exports.OrdersResolver = OrdersResolver;
//# sourceMappingURL=orders.resolver.js.map