import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from '../profiles/entities/profile.entity';
import { ProfilesService } from '../profiles/profiles.service';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

import * as bcrypt from 'bcrypt';
import { CreateProfileInput } from '../profiles/dto/create-profile.input';

const saltOrRounds = 10;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    private profilesService: ProfilesService,
  ) {}

  async createUser(createUserInput: CreateUserInput): Promise<User> {
    // Make a profile for user
    const newProfile = await this.profilesService.create(
      new CreateProfileInput(),
    );
    createUserInput.profileId = newProfile.id;
    // Hash password
    createUserInput.password = await bcrypt.hash(
      createUserInput.password,
      saltOrRounds,
    ); // Hash Password
    const newUser = this.usersRepository.create(createUserInput); // newUser = new User(); new.name = input.name
    return this.usersRepository.save(newUser); // insert
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find(); // SELECT * FROM `users`
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOneOrFail(id);
  }

  // Needed for user login
  findUserByEmail(email: string): Promise<User[]> {
    return this.usersRepository.find({ where: { email: email } });
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    const user = await this.usersRepository.findOne(id);
    updateUserInput.password = await bcrypt.hash(
      updateUserInput.password,
      saltOrRounds,
    );
    return this.usersRepository.save({ ...user, ...updateUserInput });
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }

  getProfile(profileId: number): Promise<Profile> {
    return this.profilesService.findOne(profileId);
  }
}
