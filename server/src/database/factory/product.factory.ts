import * as Faker from 'faker';
import _ from 'underscore';

import { Product } from '../../products/entities/product.entity';
import { define } from 'typeorm-seeding';

define(Product, (faker: typeof Faker) => {
  const product = new Product();

  product.name = faker.commerce.product();
  product.description = faker.lorem.sentence();
  product.image = `https://picsum.photos/${_.random(1, 100)}/400`;
  product.price = _.random(1, 10);
  product.categoryId = _.random(1, 5);
  product.farmerId = _.random(1, 20);

  return product;
});
