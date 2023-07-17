import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto';
import { hashString } from 'src/helpers/password';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  async createOne(@Body() createUserDto: CreateUserDto): Promise<User> {
    const { password } = createUserDto;
    const hashedPassword = await hashString(password);
    return this.userService.createOne({
      ...createUserDto,
      password: hashedPassword,
    });
  }
}
