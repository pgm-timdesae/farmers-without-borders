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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const dto_1 = require("./dto");
const category_entity_1 = require("./entities/category.entity");
let CategoriesService = class CategoriesService {
    constructor(categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }
    async findAll() {
        return this.categoriesRepository.find({ relations: ['products'] });
    }
    async findOne(id) {
        return this.categoriesRepository.findOneOrFail({
            where: { id: id },
            relations: ['products'],
        });
    }
    async createCategory(createCategoryInput) {
        const category = this.categoriesRepository.create(createCategoryInput);
        return this.categoriesRepository.save(category);
    }
    async updateCategory(updateCategoryInput) {
        const categoryId = await this.categoriesRepository.findOne(updateCategoryInput.id);
        return await this.categoriesRepository.save(Object.assign(Object.assign({}, categoryId), updateCategoryInput));
    }
    async deleteCategory(id) {
        const category = await this.categoriesRepository.findOne(id);
        if (category) {
            await this.categoriesRepository.remove(category);
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
], CategoriesService.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoriesService.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateCategoryInput]),
    __metadata("design:returntype", Promise)
], CategoriesService.prototype, "createCategory", null);
__decorate([
    (0, common_1.Patch)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UpdateCategoryInput]),
    __metadata("design:returntype", Promise)
], CategoriesService.prototype, "updateCategory", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoriesService.prototype, "deleteCategory", null);
CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map