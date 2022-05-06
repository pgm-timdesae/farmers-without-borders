import { Profile } from '../profiles/entities/profile.entity';
import { ProfilesService } from '../profiles/profiles.service';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
export declare class UsersService {
    private usersRepository;
    private profilesService;
    constructor(usersRepository: Repository<User>, profilesService: ProfilesService);
    createUser(createUserInput: CreateUserInput): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    findUserByEmail(email: string): Promise<User[]>;
    update(id: number, updateUserInput: UpdateUserInput): Promise<{
        id: number;
        username: string;
        email: string;
        password: string;
        profileId: number;
        profile: Profile;
        payments: import("../payments/entities/payment.entity").Payment[];
    } & User>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    getProfile(profileId: number): Promise<Profile>;
}
