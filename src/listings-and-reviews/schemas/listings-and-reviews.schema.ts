import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ListingsAndReviewsDocument = HydratedDocument<ListingsAndReviews>;

@Schema()
export class ListingsAndReviews {
  @Prop()
  listing_url: string;
  @Prop()
  name: string;
  @Prop()
  summary: string;
  @Prop()
  space: string;
  @Prop()
  neighborhood_overview: string;
  @Prop()
  notes: string;
  @Prop()
  transit: string;
  @Prop()
  interaction: string;
  @Prop()
  house_rules: string;
  @Prop()
  property_type: string;
}

export const ListingsAndReviewsSchema =
  SchemaFactory.createForClass(ListingsAndReviews);
