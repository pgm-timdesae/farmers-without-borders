import { define } from 'typeorm-seeding';
import * as Faker from 'faker';

import { Category } from '../../categories/entities/category.entity';

define(Category, (faker: typeof Faker) => {
  const category = new Category();

  category.name = faker.commerce.productName();
  category.description = faker.commerce.productName();
  category.image = faker.image.image();

  return category;
});
