import { Test, TestingModule } from '@nestjs/testing';
import { UpwardService } from './upward.service';

describe('UpwardService', () => {
  let service: UpwardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpwardService],
    }).compile();

    service = module.get<UpwardService>(UpwardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
