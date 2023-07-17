import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class EmailService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly emailService: MailerService,
  ) {}

  public sendVerificationLink(email: string) {
    const payload = { email };
    const token = this.jwtService.sign(payload, {
      secret: process.env.JWT_VERIFICATION_TOKEN_SECRET,
      expiresIn: `${process.env.JWT_VERIFICATION_TOKEN_EXPIRATION_TIME}s`,
    });

    const url = `${process.env.EMAIL_CONFIRMATION_URL}?token=${token}`;

    return this.emailService.sendMail({
      to: email,
      subject: 'Email confirmation',
      template: 'transactional.hbs',
      context: {
        url,
      },
    });
  }
}
