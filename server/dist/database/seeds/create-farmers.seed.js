"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const farmer_entity_1 = require("../../farmers/entities/farmer.entity");
class CreateFarmers {
    async run(factory, connection) {
        await factory(farmer_entity_1.Farmer)().createMany(20);
    }
}
exports.default = CreateFarmers;
//# sourceMappingURL=create-farmers.seed.js.map