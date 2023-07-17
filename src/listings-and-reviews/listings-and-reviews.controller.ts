import { Controller, Get } from '@nestjs/common';
import { ListingsAndReviews } from './schemas/listings-and-reviews.schema';
import { ListingsAndReviewsService } from './listings-and-reviews.service';

@Controller('listings-and-reviews')
export class ListingsAndReviewsController {
  constructor(private listingsAndReviewsService: ListingsAndReviewsService) {}

  @Get()
  findAll(): Promise<ListingsAndReviews[]> {
    return this.listingsAndReviewsService.findAll();
  }
}
