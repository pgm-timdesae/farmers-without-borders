import { Payment } from '../../payments/entities/payment.entity';
import { Profile } from '../../profiles/entities/profile.entity';
export declare class User {
    id: number;
    username: string;
    email: string;
    password: string;
    profileId: number;
    profile: Profile;
    payments: Payment[];
}
