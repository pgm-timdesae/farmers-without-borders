"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_entity_1 = require("../../products/entities/product.entity");
class CreateProducts {
    async run(factory, connection) {
        await factory(product_entity_1.Product)().createMany(100);
    }
}
exports.default = CreateProducts;
//# sourceMappingURL=create-products.seed.js.map