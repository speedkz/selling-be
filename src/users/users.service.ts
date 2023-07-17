import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, UpdateWriteOpResult } from 'mongoose';
import { UpdateUserDto } from './dto';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(filter): Promise<User> {
    return this.userModel.findOne(filter).exec();
  }

  async createOne(user: User): Promise<User> {
    const created = new this.userModel(user);
    return created.save();
  }

  async updateOne(filter, user: UpdateUserDto): Promise<UpdateWriteOpResult> {
    return this.userModel.updateOne(filter, user).exec();
  }

  async updateById(id, user: UpdateUserDto): Promise<any> {
    return this.userModel.findByIdAndUpdate(id, user).exec();
  }
}
