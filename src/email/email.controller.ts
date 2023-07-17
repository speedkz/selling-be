import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { IsEmail } from 'class-validator';
import { EmailService } from './email.service';
import { Public } from 'src/common/decorators';

@Controller('email')
export class EmailController {
  constructor(private emailService: EmailService) {}

  @Post()
  @Public()
  @UsePipes(IsEmail)
  verifyEmail(@Body('email') email): Promise<any> {
    return this.emailService.sendVerificationLink(email);
  }
}
