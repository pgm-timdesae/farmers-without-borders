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
exports.ReviewsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const reviews_service_1 = require("./reviews.service");
const review_entity_1 = require("./entities/review.entity");
const dto_1 = require("./dto");
const product_entity_1 = require("../products/entities/product.entity");
let ReviewsResolver = class ReviewsResolver {
    constructor(reviewsService) {
        this.reviewsService = reviewsService;
    }
    reviews() {
        return this.reviewsService.findAll();
    }
    getReview(id) {
        return this.reviewsService.findOne(id);
    }
    createReview(createReviewInput) {
        return this.reviewsService.createReview(createReviewInput);
    }
    updateReview(updateReviewInput) {
        return this.reviewsService.updateReview(updateReviewInput);
    }
    deleteReview(id) {
        return this.reviewsService.deleteReview(id);
    }
    product(review) {
        return this.reviewsService.getProduct(review.productId);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [review_entity_1.Review]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReviewsResolver.prototype, "reviews", null);
__decorate([
    (0, graphql_1.Query)(() => review_entity_1.Review),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReviewsResolver.prototype, "getReview", null);
__decorate([
    (0, graphql_1.Mutation)(() => review_entity_1.Review),
    __param(0, (0, graphql_1.Args)('createReviewInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateReviewInput]),
    __metadata("design:returntype", Promise)
], ReviewsResolver.prototype, "createReview", null);
__decorate([
    (0, graphql_1.Mutation)(() => review_entity_1.Review),
    __param(0, (0, graphql_1.Args)('updateReviewInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UpdateReviewInput]),
    __metadata("design:returntype", Promise)
], ReviewsResolver.prototype, "updateReview", null);
__decorate([
    (0, graphql_1.Mutation)(() => review_entity_1.Review),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReviewsResolver.prototype, "deleteReview", null);
__decorate([
    (0, graphql_1.ResolveField)(() => product_entity_1.Product),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [review_entity_1.Review]),
    __metadata("design:returntype", Promise)
], ReviewsResolver.prototype, "product", null);
ReviewsResolver = __decorate([
    (0, graphql_1.Resolver)((of) => review_entity_1.Review),
    __metadata("design:paramtypes", [reviews_service_1.ReviewsService])
], ReviewsResolver);
exports.ReviewsResolver = ReviewsResolver;
//# sourceMappingURL=reviews.resolver.js.map