"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const category_entity_1 = require("../../categories/entities/category.entity");
class CreateCategories {
    async run(factory, connection) {
        await connection
            .createQueryBuilder()
            .insert()
            .into(category_entity_1.Category)
            .values([
            {
                name: 'Vegetables',
                description: 'Description here',
                image: 'vegetables.jpg',
            },
            { name: 'Fruit', description: 'Description here', image: 'fruit.jpg' },
            { name: 'Dairy', description: 'Description here', image: 'dairy.jpg' },
            { name: 'Bread', description: 'Description here', image: 'bread.jpg' },
            { name: 'Meat', description: 'Description here', image: 'meat.jpg' },
        ])
            .execute();
    }
}
exports.default = CreateCategories;
//# sourceMappingURL=create-categories.seed.js.map