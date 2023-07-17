import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { HydratedDocument, ObjectId } from 'mongoose';
import { CommonSchema } from 'src/common/commonSchema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User extends CommonSchema {
  id: ObjectId;

  @Prop()
  name: string;

  @Prop({ unique: true })
  @IsNotEmpty()
  @Length(4, 10)
  username: string;

  @Prop()
  password: string;

  @Prop()
  @IsEmail()
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
