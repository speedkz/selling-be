import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { isValidObjectId } from 'mongoose';
import { MESSAGES } from '../message';

@Injectable()
export class ValidateMongoId implements PipeTransform<string> {
  transform(value: string): string {
    if (isValidObjectId(value)) return value;
    throw new HttpException(MESSAGES.INVALID_OBJECT_ID, HttpStatus.BAD_REQUEST);
  }
}
