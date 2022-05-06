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
exports.FarmersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const dto_1 = require("./dto");
const farmer_entity_1 = require("./entities/farmer.entity");
const farmers_service_1 = require("./farmers.service");
let FarmersResolver = class FarmersResolver {
    constructor(farmersService) {
        this.farmersService = farmersService;
    }
    farmers() {
        return this.farmersService.findAll();
    }
    getFarmer(id) {
        return this.farmersService.findOne(id);
    }
    createFarmer(createFarmerInput) {
        return this.farmersService.createFarmer(createFarmerInput);
    }
    updateFarmer(updateFarmerInput) {
        return this.farmersService.updateFarmer(updateFarmerInput);
    }
    deleteFarmer(id) {
        return this.farmersService.deleteFarmer(id);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [farmer_entity_1.Farmer]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FarmersResolver.prototype, "farmers", null);
__decorate([
    (0, graphql_1.Query)(() => farmer_entity_1.Farmer),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FarmersResolver.prototype, "getFarmer", null);
__decorate([
    (0, graphql_1.Mutation)(() => farmer_entity_1.Farmer),
    __param(0, (0, graphql_1.Args)('createFarmerInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateFarmerInput]),
    __metadata("design:returntype", Promise)
], FarmersResolver.prototype, "createFarmer", null);
__decorate([
    (0, graphql_1.Mutation)(() => farmer_entity_1.Farmer),
    __param(0, (0, graphql_1.Args)('updateFarmerInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UpdateFarmerInput]),
    __metadata("design:returntype", Promise)
], FarmersResolver.prototype, "updateFarmer", null);
__decorate([
    (0, graphql_1.Mutation)(() => farmer_entity_1.Farmer),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FarmersResolver.prototype, "deleteFarmer", null);
FarmersResolver = __decorate([
    (0, graphql_1.Resolver)((of) => farmer_entity_1.Farmer),
    __metadata("design:paramtypes", [farmers_service_1.FarmersService])
], FarmersResolver);
exports.FarmersResolver = FarmersResolver;
//# sourceMappingURL=farmers.resolver.js.map