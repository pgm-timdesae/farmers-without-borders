"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = require("../../users/entities/user.entity");
class CreateUsers {
    async run(factory, connection) {
        await factory(user_entity_1.User)().createMany(25);
    }
}
exports.default = CreateUsers;
//# sourceMappingURL=create-users.seed.js.map