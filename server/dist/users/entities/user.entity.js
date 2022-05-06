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
exports.User = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const payment_entity_1 = require("../../payments/entities/payment.entity");
const profile_entity_1 = require("../../profiles/entities/profile.entity");
let User = class User {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 128 }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 128, unique: true }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 64 }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], User.prototype, "profileId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => profile_entity_1.Profile, (profile) => profile.user),
    (0, typeorm_1.JoinColumn)(),
    (0, graphql_1.Field)(() => profile_entity_1.Profile),
    __metadata("design:type", profile_entity_1.Profile)
], User.prototype, "profile", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => payment_entity_1.Payment, (payment) => payment.user),
    (0, graphql_1.Field)(() => [payment_entity_1.Payment]),
    __metadata("design:type", Array)
], User.prototype, "payments", void 0);
User = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map