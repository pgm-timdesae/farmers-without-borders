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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePaymentInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let CreatePaymentInput = class CreatePaymentInput {
};
__decorate([
    (0, class_validator_1.MaxLength)(32),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreatePaymentInput.prototype, "method", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], CreatePaymentInput.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], CreatePaymentInput.prototype, "orderId", void 0);
CreatePaymentInput = __decorate([
    (0, graphql_1.InputType)()
], CreatePaymentInput);
exports.CreatePaymentInput = CreatePaymentInput;
//# sourceMappingURL=create-payment.input.js.map