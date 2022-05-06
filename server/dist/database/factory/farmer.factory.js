"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_seeding_1 = require("typeorm-seeding");
const farmer_entity_1 = require("../../farmers/entities/farmer.entity");
(0, typeorm_seeding_1.define)(farmer_entity_1.Farmer, (faker) => {
    const farmer = new farmer_entity_1.Farmer();
    farmer.firstName = faker.name.firstName();
    farmer.lastName = faker.name.lastName();
    farmer.company = `${farmer.firstName}'s Farm`;
    farmer.bio = faker.lorem.paragraph();
    farmer.logo = faker.image.avatar();
    farmer.website = `https://www.facebook.com/${faker.lorem.slug()}`;
    return farmer;
});
//# sourceMappingURL=farmer.factory.js.map