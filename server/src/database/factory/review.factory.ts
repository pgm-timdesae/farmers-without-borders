import { define } from 'typeorm-seeding';
import * as Faker from 'faker';
import _ from 'underscore';

import { Review } from '../../reviews/entities/review.entity';

define(Review, (faker: typeof Faker) => {
  const review = new Review();

  review.rating = _.random(1, 5);
  review.text = faker.lorem.sentence();
  review.productId = _.random(1, 100);

  return review;
});
