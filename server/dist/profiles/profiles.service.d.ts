import { Repository } from 'typeorm';
import { CreateProfileInput } from './dto/create-profile.input';
import { UpdateProfileInput } from './dto/update-profile.input';
import { Profile } from './entities/profile.entity';
export declare class ProfilesService {
    private profilesRepository;
    constructor(profilesRepository: Repository<Profile>);
    create(createProfileInput: CreateProfileInput): Promise<Profile>;
    findAll(): Promise<Profile[]>;
    findOne(id: number): Promise<Profile>;
    update(id: number, updateProfileInput: UpdateProfileInput): Promise<{
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
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
