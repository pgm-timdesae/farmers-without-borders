"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const review_entity_1 = require("../../reviews/entities/review.entity");
class CreateReviews {
    async run(factory, connection) {
        await factory(review_entity_1.Review)().createMany(50);
    }
}
exports.default = CreateReviews;
//# sourceMappingURL=create-reviews.seed.js.map