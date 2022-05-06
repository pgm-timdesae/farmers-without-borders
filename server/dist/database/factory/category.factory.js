"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_seeding_1 = require("typeorm-seeding");
const category_entity_1 = require("../../categories/entities/category.entity");
(0, typeorm_seeding_1.define)(category_entity_1.Category, (faker) => {
    const category = new category_entity_1.Category();
    category.name = faker.commerce.productName();
    category.description = faker.commerce.productName();
    category.image = faker.image.image();
    return category;
});
//# sourceMappingURL=category.factory.js.map