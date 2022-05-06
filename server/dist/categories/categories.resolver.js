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
exports.CategoriesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const dto_1 = require("./dto/");
const category_entity_1 = require("./entities/category.entity");
const categories_service_1 = require("./categories.service");
let CategoriesResolver = class CategoriesResolver {
    constructor(categoriesService) {
        this.categoriesService = categoriesService;
    }
    categories() {
        return this.categoriesService.findAll();
    }
    getCategory(id) {
        return this.categoriesService.findOne(id);
    }
    createCategory(createCategoryInput) {
        return this.categoriesService.createCategory(createCategoryInput);
    }
    updateCategory(updateCategoryInput) {
        return this.categoriesService.updateCategory(updateCategoryInput);
    }
    deleteCategory(id) {
        return this.categoriesService.deleteCategory(id);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [category_entity_1.Category]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoriesResolver.prototype, "categories", null);
__decorate([
    (0, graphql_1.Query)(() => category_entity_1.Category),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoriesResolver.prototype, "getCategory", null);
__decorate([
    (0, graphql_1.Mutation)(() => category_entity_1.Category),
    __param(0, (0, graphql_1.Args)('createCategoryInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateCategoryInput]),
    __metadata("design:returntype", Promise)
], CategoriesResolver.prototype, "createCategory", null);
__decorate([
    (0, graphql_1.Mutation)(() => category_entity_1.Category),
    __param(0, (0, graphql_1.Args)('updateCategoryInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UpdateCategoryInput]),
    __metadata("design:returntype", Promise)
], CategoriesResolver.prototype, "updateCategory", null);
__decorate([
    (0, graphql_1.Mutation)(() => category_entity_1.Category),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CategoriesResolver.prototype, "deleteCategory", null);
CategoriesResolver = __decorate([
    (0, graphql_1.Resolver)((of) => category_entity_1.Category),
    __metadata("design:paramtypes", [categories_service_1.CategoriesService])
], CategoriesResolver);
exports.CategoriesResolver = CategoriesResolver;
//# sourceMappingURL=categories.resolver.js.map