"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const underscore_1 = require("underscore");
const product_entity_1 = require("../../products/entities/product.entity");
const typeorm_seeding_1 = require("typeorm-seeding");
(0, typeorm_seeding_1.define)(product_entity_1.Product, (faker) => {
    const product = new product_entity_1.Product();
    product.name = faker.commerce.product();
    product.description = faker.lorem.sentence();
    product.image = `https://picsum.photos/${underscore_1.default.random(1, 100)}/400`;
    product.price = underscore_1.default.random(1, 10);
    product.categoryId = underscore_1.default.random(1, 5);
    product.farmerId = underscore_1.default.random(1, 20);
    return product;
});
//# sourceMappingURL=product.factory.js.map