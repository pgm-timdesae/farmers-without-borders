"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const category_entity_1 = require("../../categories/entities/category.entity");
class CreateCategories {
    async run(factory, connection) {
        await factory(category_entity_1.Category)().createMany(5);
    }
}
exports.default = CreateCategories;
//# sourceMappingURL=create-categories.seed%20copy.js.map