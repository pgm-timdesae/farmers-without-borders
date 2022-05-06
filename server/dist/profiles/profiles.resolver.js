"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const profiles_service_1 = require("./profiles.service");
const profile_entity_1 = require("./entities/profile.entity");
const create_profile_input_1 = require("./dto/create-profile.input");
const update_profile_input_1 = require("./dto/update-profile.input");
let ProfilesResolver = class ProfilesResolver {
    constructor(profilesService) {
        this.profilesService = profilesService;
    }
    createProfile(createProfileInput) {
        return this.profilesService.create(createProfileInput);
    }
    findAll() {
        return this.profilesService.findAll();
    }
    findOne(id) {
        return this.profilesService.findOne(id);
    }
    updateProfile(updateProfileInput) {
        return this.profilesService.update(updateProfileInput.id, updateProfileInput);
    }
    removeProfile(id) {
        return this.profilesService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => profile_entity_1.Profile),
    __param(0, (0, graphql_1.Args)('createProfileInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_profile_input_1.CreateProfileInput]),
    __metadata("design:returntype", Promise)
], ProfilesResolver.prototype, "createProfile", null);
__decorate([
    (0, graphql_1.Query)(() => [profile_entity_1.Profile], { name: 'profiles' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProfilesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => profile_entity_1.Profile, { name: 'profile' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProfilesResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => profile_entity_1.Profile),
    __param(0, (0, graphql_1.Args)('updateProfileInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_profile_input_1.UpdateProfileInput]),
    __metadata("design:returntype", void 0)
], ProfilesResolver.prototype, "updateProfile", null);
__decorate([
    (0, graphql_1.Mutation)(() => profile_entity_1.Profile),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProfilesResolver.prototype, "removeProfile", null);
ProfilesResolver = __decorate([
    (0, graphql_1.Resolver)(() => profile_entity_1.Profile),
    __metadata("design:paramtypes", [profiles_service_1.ProfilesService])
], ProfilesResolver);
exports.ProfilesResolver = ProfilesResolver;
//# sourceMappingURL=profiles.resolver.js.map