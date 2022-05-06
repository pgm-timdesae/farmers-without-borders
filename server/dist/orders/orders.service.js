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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const dto_1 = require("./dto");
const order_entity_1 = require("./entities/order.entity");
const products_service_1 = require("../products/products.service");
let OrdersService = class OrdersService {
    constructor(ordersRepository, productsService) {
        this.ordersRepository = ordersRepository;
        this.productsService = productsService;
    }
    async findAll() {
        return this.ordersRepository.find();
    }
    findOne(id) {
        return this.ordersRepository.findOneOrFail(id);
    }
    createOrder(createOrderInput) {
        const newOrder = this.ordersRepository.create(createOrderInput);
        return this.ordersRepository.save(newOrder);
    }
    async updateOrder(updateOrderInput) {
        const orderId = await this.ordersRepository.findOne(updateOrderInput.id);
        return await this.ordersRepository.save(Object.assign(Object.assign({}, orderId), updateOrderInput));
    }
    async deleteOrder(id) {
        const order = await this.ordersRepository.findOne(id);
        if (order) {
            await this.ordersRepository.remove(order);
            return id;
        }
        else {
            return null;
        }
    }
    async addToOrder(orderId, productId) {
        const foundOrder = await this.ordersRepository.findOne({ id: orderId }, { relations: ['products'] });
        const foundProduct = await this.productsService.findOne(productId);
        if (foundOrder && foundProduct) {
            foundOrder.products = foundOrder.products
                ? [...foundOrder.products, foundProduct]
                : [foundProduct];
            return this.ordersRepository.save(foundOrder);
        }
        else {
            throw new Error(`Finding order or product problem`);
        }
    }
    async removeFromOrder(orderId, productId) {
        const foundOrder = await this.ordersRepository.findOne({ id: orderId }, { relations: ['products'] });
        const foundProduct = await this.productsService.findOne(productId);
        if (foundOrder && foundProduct) {
            foundOrder.products = foundOrder.products
                ? [...foundOrder.products.filter((f) => f.id != productId)]
                : [];
            return this.ordersRepository.save(foundOrder);
        }
        else {
            throw new Error(`Finding order or product problem`);
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrdersService.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrdersService.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateOrderInput]),
    __metadata("design:returntype", Promise)
], OrdersService.prototype, "createOrder", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UpdateOrderInput]),
    __metadata("design:returntype", Promise)
], OrdersService.prototype, "updateOrder", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrdersService.prototype, "deleteOrder", null);
OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        products_service_1.ProductsService])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map