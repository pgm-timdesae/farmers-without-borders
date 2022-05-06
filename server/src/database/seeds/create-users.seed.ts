import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

import { User } from '../../users/entities/user.entity';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(User)().createMany(25);
  }
}
