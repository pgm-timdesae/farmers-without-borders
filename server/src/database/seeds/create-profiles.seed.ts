import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

import { Profile } from '../../profiles/entities/profile.entity';

export default class CreateProfiles implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Profile)().createMany(25);
  }
}
