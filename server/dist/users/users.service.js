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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const profiles_service_1 = require("../profiles/profiles.service");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const bcrypt = require("bcrypt");
const create_profile_input_1 = require("../profiles/dto/create-profile.input");
const saltOrRounds = 10;
let UsersService = class UsersService {
    constructor(usersRepository, profilesService) {
        this.usersRepository = usersRepository;
        this.profilesService = profilesService;
    }
    async createUser(createUserInput) {
        const newProfile = await this.profilesService.create(new create_profile_input_1.CreateProfileInput());
        createUserInput.profileId = newProfile.id;
        createUserInput.password = await bcrypt.hash(createUserInput.password, saltOrRounds);
        const newUser = this.usersRepository.create(createUserInput);
        return this.usersRepository.save(newUser);
    }
    async findAll() {
        return this.usersRepository.find();
    }
    findOne(id) {
        return this.usersRepository.findOneOrFail(id);
    }
    findUserByEmail(email) {
        return this.usersRepository.find({ where: { email: email } });
    }
    async update(id, updateUserInput) {
        const user = await this.usersRepository.findOne(id);
        updateUserInput.password = await bcrypt.hash(updateUserInput.password, saltOrRounds);
        return this.usersRepository.save(Object.assign(Object.assign({}, user), updateUserInput));
    }
    remove(id) {
        return this.usersRepository.delete(id);
    }
    getProfile(profileId) {
        return this.profilesService.findOne(profileId);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        profiles_service_1.ProfilesService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map