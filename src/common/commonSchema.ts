import { Prop } from '@nestjs/mongoose';

export class CommonSchema {
  @Prop({
    default: new Date(),
  })
  createdDate: Date;

  @Prop()
  updatedDate: Date;
}
