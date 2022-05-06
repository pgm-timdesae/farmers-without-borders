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
exports.FarmersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const dto_1 = require("./dto");
const farmer_entity_1 = require("./entities/farmer.entity");
let FarmersService = class FarmersService {
    constructor(farmersRepository) {
        this.farmersRepository = farmersRepository;
    }
    async findAll() {
        return this.farmersRepository.find({
            relations: ['products'],
        });
    }
    async findOne(id) {
        return this.farmersRepository.findOneOrFail({
            where: { id: id },
            relations: ['products'],
        });
    }
    async createFarmer(createFarmerInput) {
        const farmer = this.farmersRepository.create(createFarmerInput);
        return this.farmersRepository.save(farmer);
    }
    async updateFarmer(updateFarmerInput) {
        const farmerId = await this.farmersRepository.findOne(updateFarmerInput.id);
        return await this.farmersRepository.save(Object.assign(Object.assign({}, farmerId), updateFarmerInput));
    }
    async deleteFarmer(id) {
        const farmer = await this.farmersRepository.findOne(id);
        if (farmer) {
            await this.farmersRepository.remove(farmer);
            return id;
        }
        else {
            return null;
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FarmersService.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FarmersService.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateFarmerInput]),
    __metadata("design:returntype", Promise)
], FarmersService.prototype, "createFarmer", null);
__decorate([
    (0, common_1.Patch)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UpdateFarmerInput]),
    __metadata("design:returntype", Promise)
], FarmersService.prototype, "updateFarmer", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FarmersService.prototype, "deleteFarmer", null);
FarmersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(farmer_entity_1.Farmer)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FarmersService);
exports.FarmersService = FarmersService;
//# sourceMappingURL=farmers.service.js.map