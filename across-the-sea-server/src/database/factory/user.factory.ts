import { define, factory } from 'typeorm-seeding';
import * as Faker from 'faker';
import * as bcrypt from 'bcrypt';

import { Profile } from '../../profiles/entities/profile.entity';
import { User } from '../../users/entities/user.entity';

const SALT_ROUNDS = 10;

define(User, (faker: typeof Faker) => {
  const user = new User();

  user.username = faker.internet.userName();
  user.email = faker.internet.email();
  user.password = bcrypt.hashSync(faker.internet.password(), SALT_ROUNDS);

  user.profile = factory(Profile)() as any;

  return user;
});
