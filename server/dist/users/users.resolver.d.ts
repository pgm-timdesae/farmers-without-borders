import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Profile } from '../profiles/entities/profile.entity';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(createUserInput: CreateUserInput): Promise<User>;
    findOne(id: number): Promise<User>;
    findAll(): Promise<User[]>;
    findUserByEmail(email: string): Promise<User[]>;
    profile(user: User): Promise<Profile>;
    updateUser(updateUserInput: UpdateUserInput): Promise<{
        id: number;
        username: string;
        email: string;
        password: string;
        profileId: number;
        profile: Profile;
        payments: import("../payments/entities/payment.entity").Payment[];
    } & User>;
    removeUser(id: number): Promise<import("typeorm").DeleteResult>;
}
