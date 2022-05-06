import { Test, TestingModule } from '@nestjs/testing';

import { FarmersResolver } from './farmers.resolver';

describe('FarmersResolver', () => {
  let resolver: FarmersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FarmersResolver],
    }).compile();

    resolver = module.get<FarmersResolver>(FarmersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
