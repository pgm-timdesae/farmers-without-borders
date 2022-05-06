import { Product } from '../../products/entities/product.entity';
export declare class Farmer {
    id: number;
    company: string;
    firstName: string;
    lastName: string;
    bio: string;
    logo: string;
    website: string;
    products: Product[];
}
