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
exports.ProductsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const dto_1 = require("./dto");
const farmer_entity_1 = require("../farmers/entities/farmer.entity");
const product_entity_1 = require("./entities/product.entity");
const products_service_1 = require("./products.service");
let ProductsResolver = class ProductsResolver {
    constructor(productsService) {
        this.productsService = productsService;
    }
    products() {
        return this.productsService.findAll();
    }
    getProduct(id) {
        return this.productsService.findOne(id);
    }
    getSpecificProducts(name) {
        return this.productsService.getSpecificProducts(name);
    }
    createProduct(createProductInput) {
        return this.productsService.createProduct(createProductInput);
    }
    updateProduct(updateProductInput) {
        return this.productsService.updateProduct(updateProductInput);
    }
    deleteProduct(id) {
        return this.productsService.deleteProduct(id);
    }
    category(product) {
        return this.productsService.getCategory(product.categoryId);
    }
    farmer(product) {
        return this.productsService.getFarmer(product.farmerId);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [product_entity_1.Product]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "products", null);
__decorate([
    (0, graphql_1.Query)(() => product_entity_1.Product),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "getProduct", null);
__decorate([
    (0, graphql_1.Query)(() => [product_entity_1.Product]),
    __param(0, (0, graphql_1.Args)('name', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "getSpecificProducts", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_entity_1.Product),
    __param(0, (0, graphql_1.Args)('createProductInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateProductInput]),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "createProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_entity_1.Product),
    __param(0, (0, graphql_1.Args)('updateProductInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UpdateProductInput]),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "updateProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_entity_1.Product),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProductsResolver.prototype, "deleteProduct", null);
__decorate([
    (0, graphql_1.ResolveField)(() => farmer_entity_1.Farmer),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_entity_1.Product]),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "category", null);
__decorate([
    (0, graphql_1.ResolveField)(() => farmer_entity_1.Farmer),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_entity_1.Product]),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "farmer", null);
ProductsResolver = __decorate([
    (0, graphql_1.Resolver)((of) => product_entity_1.Product),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsResolver);
exports.ProductsResolver = ProductsResolver;
//# sourceMappingURL=products.resolver.js.map