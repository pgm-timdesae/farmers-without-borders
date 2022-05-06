import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

import { Review } from '../../reviews/entities/review.entity';

export default class CreateReviews implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Review)().createMany(50);
  }
}
