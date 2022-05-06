"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_seeding_1 = require("typeorm-seeding");
const bcrypt = require("bcrypt");
const profile_entity_1 = require("../../profiles/entities/profile.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const SALT_ROUNDS = 10;
(0, typeorm_seeding_1.define)(user_entity_1.User, (faker) => {
    const user = new user_entity_1.User();
    user.username = faker.internet.userName();
    user.email = faker.internet.email();
    user.password = bcrypt.hashSync(faker.internet.password(), SALT_ROUNDS);
    user.profile = (0, typeorm_seeding_1.factory)(profile_entity_1.Profile)();
    return user;
});
//# sourceMappingURL=user.factory.js.map