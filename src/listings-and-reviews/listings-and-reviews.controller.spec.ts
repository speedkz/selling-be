import { Test, TestingModule } from '@nestjs/testing';
import { ListingsAndReviewsController } from './listings-and-reviews.controller';

describe('ListingsAndReviewsController', () => {
  let controller: ListingsAndReviewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListingsAndReviewsController],
    }).compile();

    controller = module.get<ListingsAndReviewsController>(ListingsAndReviewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
