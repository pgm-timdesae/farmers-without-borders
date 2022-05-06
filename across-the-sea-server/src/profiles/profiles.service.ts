import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfileInput } from './dto/create-profile.input';
import { UpdateProfileInput } from './dto/update-profile.input';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile) private profilesRepository: Repository<Profile>,
  ) {}

  create(createProfileInput: CreateProfileInput) {
    const newProfile = this.profilesRepository.create(createProfileInput);
    return this.profilesRepository.save(newProfile);
  }

  async findAll(): Promise<Profile[]> {
    return this.profilesRepository.find();
  }

  async findOne(id: number): Promise<Profile> {
    return this.profilesRepository.findOneOrFail(id);
  }

  async update(id: number, updateProfileInput: UpdateProfileInput) {
    const profile = await this.profilesRepository.findOne(id);
    return this.profilesRepository.save({ ...profile, ...updateProfileInput });
  }

  remove(id: number) {
    return this.profilesRepository.delete(id);
  }
}
