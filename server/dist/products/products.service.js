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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const dto_1 = require("./dto");
const categories_service_1 = require("../categories/categories.service");
const farmers_service_1 = require("../farmers/farmers.service");
const product_entity_1 = require("./entities/product.entity");
let ProductsService = class ProductsService {
    constructor(productsRepository, categoriesService, farmersService) {
        this.productsRepository = productsRepository;
        this.categoriesService = categoriesService;
        this.farmersService = farmersService;
    }
    async findAll() {
        return this.productsRepository.find({
            relations: ['orders', 'reviews'],
        });
    }
    async findOne(id) {
        return this.productsRepository.findOneOrFail({
            where: { id: id },
            relations: ['orders', 'reviews'],
        });
    }
    async getCategory(categoryId) {
        return this.categoriesService.findOne(categoryId);
    }
    async getFarmer(farmerId) {
        return this.farmersService.findOne(farmerId);
    }
    getSpecificProducts(name) {
        return this.productsRepository.find({
            where: { name: (0, typeorm_2.Like)(`%${name}%`) },
            relations: ['orders', 'reviews'],
        });
    }
    async createProduct(createProductInput) {
        const product = this.productsRepository.create(createProductInput);
        return this.productsRepository.save(product);
    }
    async updateProduct(updateProductInput) {
        const productId = await this.productsRepository.findOne(updateProductInput.id);
        return await this.productsRepository.save(Object.assign(Object.assign({}, productId), updateProductInput));
    }
    async deleteProduct(id) {
        const product = await this.productsRepository.findOne(id);
        if (product) {
            await this.productsRepository.remove(product);
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
], ProductsService.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductsService.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':categoryId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductsService.prototype, "getCategory", null);
__decorate([
    (0, common_1.Get)(':farmerId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductsService.prototype, "getFarmer", null);
__decorate([
    (0, common_1.Get)(':name'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsService.prototype, "getSpecificProducts", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateProductInput]),
    __metadata("design:returntype", Promise)
], ProductsService.prototype, "createProduct", null);
__decorate([
    (0, common_1.Patch)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UpdateProductInput]),
    __metadata("design:returntype", Promise)
], ProductsService.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductsService.prototype, "deleteProduct", null);
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        categories_service_1.CategoriesService,
        farmers_service_1.FarmersService])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map