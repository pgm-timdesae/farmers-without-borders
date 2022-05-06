import { User } from 'src/users/entities/user.entity';
export declare class Profile {
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
    user: User;
}
