import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ListingsAndReviews } from './schemas/listings-and-reviews.schema';
import { Model } from 'mongoose';

@Injectable()
export class ListingsAndReviewsService {
  constructor(
    @InjectModel(ListingsAndReviews.name)
    private listingsAndReviewsModel: Model<ListingsAndReviews>,
  ) {}

  async findAll(): Promise<ListingsAndReviews[]> {
    return this.listingsAndReviewsModel.find().exec();
  }
}
