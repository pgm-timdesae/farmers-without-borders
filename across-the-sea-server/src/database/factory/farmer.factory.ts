import { define } from 'typeorm-seeding';
import * as Faker from 'faker';

import { Farmer } from '../../farmers/entities/farmer.entity';

define(Farmer, (faker: typeof Faker) => {
  const farmer = new Farmer();

  farmer.firstName = faker.name.firstName();
  farmer.lastName = faker.name.lastName();
  farmer.company = `${farmer.firstName}'s Farm`;
  farmer.bio = faker.lorem.paragraph();
  farmer.logo = faker.image.avatar();
  farmer.website = `https://www.facebook.com/${faker.lorem.slug()}`;

  return farmer;
});
