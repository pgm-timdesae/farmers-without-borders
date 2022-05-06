"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const profile_entity_1 = require("../../profiles/entities/profile.entity");
const typeorm_seeding_1 = require("typeorm-seeding");
(0, typeorm_seeding_1.define)(profile_entity_1.Profile, () => {
    const profile = new profile_entity_1.Profile();
    profile.firstName = null;
    profile.lastName = null;
    profile.profilePicture = null;
    profile.gender = null;
    profile.birthday = null;
    profile.street = null;
    profile.houseNumber = null;
    profile.zipCode = null;
    profile.country = null;
    profile.telephoneNumber = null;
    return profile;
});
//# sourceMappingURL=profile.factory.js.map