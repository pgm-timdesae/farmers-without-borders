import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Category } from '../../categories/entities/category.entity';

export default class CreateCategories implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Category)
      .values([
        {
          name: 'Vegetables',
          description: 'Description here',
          image: 'vegetables.jpg',
        },
        { name: 'Fruit', description: 'Description here', image: 'fruit.jpg' },
        { name: 'Dairy', description: 'Description here', image: 'dairy.jpg' },
        { name: 'Bread', description: 'Description here', image: 'bread.jpg' },
        { name: 'Meat', description: 'Description here', image: 'meat.jpg' },
      ])
      .execute();
  }
}
