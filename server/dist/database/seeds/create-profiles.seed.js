"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const profile_entity_1 = require("../../profiles/entities/profile.entity");
class CreateProfiles {
    async run(factory, connection) {
        await factory(profile_entity_1.Profile)().createMany(25);
    }
}
exports.default = CreateProfiles;
//# sourceMappingURL=create-profiles.seed.js.map