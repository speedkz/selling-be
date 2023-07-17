import { User } from '../schemas/user.schema';
import { ValidateIf } from 'class-validator';

export class UpdateUserDto {
  password?: string;
}

export class CreateUserDto extends User {
  @ValidateIf((value) =>
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(
      value,
    ),
  )
  password: string;
}
