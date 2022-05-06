import { CreateFarmerInput, UpdateFarmerInput } from './dto';
import { Farmer } from './entities/farmer.entity';
import { FarmersService } from './farmers.service';
export declare class FarmersResolver {
    private farmersService;
    constructor(farmersService: FarmersService);
    farmers(): Promise<Farmer[]>;
    getFarmer(id: number): Promise<Farmer>;
    createFarmer(createFarmerInput: CreateFarmerInput): Promise<Farmer>;
    updateFarmer(updateFarmerInput: UpdateFarmerInput): Promise<Farmer>;
    deleteFarmer(id: number): Promise<number>;
}
