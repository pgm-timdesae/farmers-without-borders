import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

import { Farmer } from '../../farmers/entities/farmer.entity';

export default class CreateFarmers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Farmer)().createMany(20);
  }
}
