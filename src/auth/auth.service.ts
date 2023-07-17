import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { MESSAGES } from 'src/common/message';
import { checkMatchPassword, hashString } from 'src/helpers/password';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<User> {
    const user = await this.userService.findOne({ username });
    if (!user)
      throw new HttpException(MESSAGES.USER_NOT_FOUND, HttpStatus.NOT_FOUND);

    const isMatch = await checkMatchPassword(password, user.password);
    return isMatch ? user : null;
  }

  async signIn(username: string, password: string): Promise<any> {
    const isMatch = await this.validateUser(username, password);
    if (isMatch)
      return {
        access_token: await this.jwtService.signAsync({
          username,
          password,
        }),
      };
    throw new HttpException(MESSAGES.INVALID_PASSWORD, HttpStatus.UNAUTHORIZED);
  }

  async createPassword(id: ObjectId, password: string): Promise<any> {
    const hashedPassword = await hashString(password);
    return this.userService.updateById(id, { password: hashedPassword });
  }

  async hashPassword(password: string): Promise<any> {
    return hashString(password);
  }
}
