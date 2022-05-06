import { Repository } from 'typeorm';
import { CreateFarmerInput, UpdateFarmerInput } from './dto';
import { Farmer } from './entities/farmer.entity';
export declare class FarmersService {
    private farmersRepository;
    constructor(farmersRepository: Repository<Farmer>);
    findAll(): Promise<Farmer[]>;
    findOne(id: number): Promise<Farmer>;
    createFarmer(createFarmerInput: CreateFarmerInput): Promise<Farmer>;
    updateFarmer(updateFarmerInput: UpdateFarmerInput): Promise<Farmer>;
    deleteFarmer(id: number): Promise<number>;
}
