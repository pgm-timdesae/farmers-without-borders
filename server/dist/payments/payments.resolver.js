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
exports.PaymentsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const payments_service_1 = require("./payments.service");
const payment_entity_1 = require("./entities/payment.entity");
const create_payment_input_1 = require("./dto/create-payment.input");
const update_payment_input_1 = require("./dto/update-payment.input");
const user_entity_1 = require("../users/entities/user.entity");
const order_entity_1 = require("../orders/entities/order.entity");
let PaymentsResolver = class PaymentsResolver {
    constructor(paymentsService) {
        this.paymentsService = paymentsService;
    }
    createPayment(createPaymentInput) {
        return this.paymentsService.create(createPaymentInput);
    }
    findAll() {
        return this.paymentsService.findAll();
    }
    findOne(id) {
        return this.paymentsService.findOne(id);
    }
    user(payment) {
        return this.paymentsService.getUser(payment.userId);
    }
    order(payment) {
        return this.paymentsService.getOrder(payment.orderId);
    }
    updatePayment(updatePaymentInput) {
        return this.paymentsService.update(updatePaymentInput.id, updatePaymentInput);
    }
    removePayment(id) {
        return this.paymentsService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => payment_entity_1.Payment),
    __param(0, (0, graphql_1.Args)('createPaymentInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_payment_input_1.CreatePaymentInput]),
    __metadata("design:returntype", void 0)
], PaymentsResolver.prototype, "createPayment", null);
__decorate([
    (0, graphql_1.Query)(() => [payment_entity_1.Payment], { name: 'payments' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PaymentsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => payment_entity_1.Payment, { name: 'payment' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PaymentsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.ResolveField)(() => user_entity_1.User),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_entity_1.Payment]),
    __metadata("design:returntype", Promise)
], PaymentsResolver.prototype, "user", null);
__decorate([
    (0, graphql_1.ResolveField)(() => order_entity_1.Order),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_entity_1.Payment]),
    __metadata("design:returntype", Promise)
], PaymentsResolver.prototype, "order", null);
__decorate([
    (0, graphql_1.Mutation)(() => payment_entity_1.Payment),
    __param(0, (0, graphql_1.Args)('updatePaymentInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_payment_input_1.UpdatePaymentInput]),
    __metadata("design:returntype", void 0)
], PaymentsResolver.prototype, "updatePayment", null);
__decorate([
    (0, graphql_1.Mutation)(() => payment_entity_1.Payment),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PaymentsResolver.prototype, "removePayment", null);
PaymentsResolver = __decorate([
    (0, graphql_1.Resolver)(() => payment_entity_1.Payment),
    __metadata("design:paramtypes", [payments_service_1.PaymentsService])
], PaymentsResolver);
exports.PaymentsResolver = PaymentsResolver;
//# sourceMappingURL=payments.resolver.js.map