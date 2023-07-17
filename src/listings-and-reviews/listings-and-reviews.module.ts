import { Module } from '@nestjs/common';
import { ListingsAndReviewsController } from './listings-and-reviews.controller';
import { ListingsAndReviewsService } from './listings-and-reviews.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ListingsAndReviewsSchema,
  ListingsAndReviews,
} from './schemas/listings-and-reviews.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ListingsAndReviews.name, schema: ListingsAndReviewsSchema },
    ]),
  ],
  controllers: [ListingsAndReviewsController],
  providers: [ListingsAndReviewsService],
})
export class ListingsAndReviewsModule {}
