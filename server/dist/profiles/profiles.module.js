"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilesModule = void 0;
const common_1 = require("@nestjs/common");
const profiles_service_1 = require("./profiles.service");
const profiles_resolver_1 = require("./profiles.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const profile_entity_1 = require("./entities/profile.entity");
let ProfilesModule = class ProfilesModule {
};
ProfilesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([profile_entity_1.Profile])],
        providers: [profiles_resolver_1.ProfilesResolver, profiles_service_1.ProfilesService],
        exports: [profiles_service_1.ProfilesService],
    })
], ProfilesModule);
exports.ProfilesModule = ProfilesModule;
//# sourceMappingURL=profiles.module.js.map