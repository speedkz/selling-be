import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { ValidateMongoId } from 'src/common/pipes/ValidateMongoId';
import { AuthService } from './auth.service';
import { LoginDto } from './dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { Public } from 'src/common/decorators';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('hash-password')
  hashPassword(@Body() payload: { password: string }): Promise<string> {
    const { password } = payload;
    return this.authService.hashPassword(password);
  }

  @Post('create-password')
  createPassword(
    @Query('id', ValidateMongoId) id: ObjectId,
    @Body() payload: { password: string },
  ): Promise<string> {
    const { password } = payload;
    return this.authService.createPassword(id, password);
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Body() payload: LoginDto): Promise<any> {
    const { username, password } = payload;
    return this.authService.signIn(username, password);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    return req.user;
  }
}
