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
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_service_1 = require("../users/users.service");
const typeorm_2 = require("typeorm");
const orders_service_1 = require("../orders/orders.service");
const payment_entity_1 = require("./entities/payment.entity");
let PaymentsService = class PaymentsService {
    constructor(paymentsRepository, usersService, ordersService) {
        this.paymentsRepository = paymentsRepository;
        this.usersService = usersService;
        this.ordersService = ordersService;
    }
    async create(createPaymentInput) {
        const newPayment = this.paymentsRepository.create(createPaymentInput);
        return this.paymentsRepository.save(newPayment);
    }
    async findAll() {
        return this.paymentsRepository.find();
    }
    async findOne(id) {
        return this.paymentsRepository.findOneOrFail(id);
    }
    async update(id, updatePaymentInput) {
        const payment = await this.paymentsRepository.findOne(id);
        return this.paymentsRepository.save(Object.assign(Object.assign({}, payment), updatePaymentInput));
    }
    async remove(id) {
        return this.paymentsRepository.delete(id);
    }
    getUser(userId) {
        return this.usersService.findOne(userId);
    }
    getOrder(orderId) {
        return this.ordersService.findOne(orderId);
    }
};
PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(payment_entity_1.Payment)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService,
        orders_service_1.OrdersService])
], PaymentsService);
exports.PaymentsService = PaymentsService;
//# sourceMappingURL=payments.service.js.map