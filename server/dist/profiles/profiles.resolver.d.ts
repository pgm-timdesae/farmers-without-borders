import { ProfilesService } from './profiles.service';
import { Profile } from './entities/profile.entity';
import { CreateProfileInput } from './dto/create-profile.input';
import { UpdateProfileInput } from './dto/update-profile.input';
export declare class ProfilesResolver {
    private readonly profilesService;
    constructor(profilesService: ProfilesService);
    createProfile(createProfileInput: CreateProfileInput): Promise<Profile>;
    findAll(): Promise<Profile[]>;
    findOne(id: number): Promise<Profile>;
    updateProfile(updateProfileInput: UpdateProfileInput): Promise<{
        id: number;
        firstName: string;
        lastName: string;
        profilePicture: string;
        gender: string;
        birthday: string;
        street: string;
        houseNumber: string;
        zipCode: string;
        country: string;
        telephoneNumber: number;
        user: import("../users/entities/user.entity").User;
    } & Profile>;
    removeProfile(id: number): Promise<import("typeorm").DeleteResult>;
}
