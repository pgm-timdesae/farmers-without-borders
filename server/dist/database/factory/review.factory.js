"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_seeding_1 = require("typeorm-seeding");
const underscore_1 = require("underscore");
const review_entity_1 = require("../../reviews/entities/review.entity");
(0, typeorm_seeding_1.define)(review_entity_1.Review, (faker) => {
    const review = new review_entity_1.Review();
    review.rating = underscore_1.default.random(1, 5);
    review.text = faker.lorem.sentence();
    review.productId = underscore_1.default.random(1, 100);
    return review;
});
//# sourceMappingURL=review.factory.js.map