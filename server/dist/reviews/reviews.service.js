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
exports.ReviewsService = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("typeorm");
const dto_1 = require("./dto");
const review_entity_1 = require("./entities/review.entity");
const products_service_1 = require("../products/products.service");
let ReviewsService = class ReviewsService {
    constructor(reviewsRepository, productsService) {
        this.reviewsRepository = reviewsRepository;
        this.productsService = productsService;
    }
    async findAll() {
        return this.reviewsRepository.find();
    }
    async findOne(id) {
        return this.reviewsRepository.findOneOrFail(id);
    }
    async getProduct(productId) {
        return this.productsService.findOne(productId);
    }
    async createReview(createReviewInput) {
        const review = this.reviewsRepository.create(createReviewInput);
        return this.reviewsRepository.save(review);
    }
    async updateReview(updateReviewInput) {
        const reviewId = await this.reviewsRepository.findOne(updateReviewInput.id);
        return await this.reviewsRepository.save(Object.assign(Object.assign({}, reviewId), updateReviewInput));
    }
    async deleteReview(id) {
        const review = await this.reviewsRepository.findOne(id);
        if (review) {
            await this.reviewsRepository.remove(review);
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
], ReviewsService.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReviewsService.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':productId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReviewsService.prototype, "getProduct", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateReviewInput]),
    __metadata("design:returntype", Promise)
], ReviewsService.prototype, "createReview", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UpdateReviewInput]),
    __metadata("design:returntype", Promise)
], ReviewsService.prototype, "updateReview", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReviewsService.prototype, "deleteReview", null);
ReviewsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(review_entity_1.Review)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        products_service_1.ProductsService])
], ReviewsService);
exports.ReviewsService = ReviewsService;
//# sourceMappingURL=reviews.service.js.map