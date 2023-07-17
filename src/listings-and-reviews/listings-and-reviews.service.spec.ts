import { Test, TestingModule } from '@nestjs/testing';
import { ListingsAndReviewsService } from './listings-and-reviews.service';

describe('ListingsAndReviewsService', () => {
  let service: ListingsAndReviewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListingsAndReviewsService],
    }).compile();

    service = module.get<ListingsAndReviewsService>(ListingsAndReviewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
