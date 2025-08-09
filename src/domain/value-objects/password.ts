import { InvalidPasswordError } from "@domain/errors/invalid-password-error";

export class Password {
  private readonly password: string;

  constructor(password: string) {
    Password.validate(password);
    this.password = password;
  }

  get value() {
    return this.password;
  }

  static validate(password: string) {
    if (password.length < 8) throw new InvalidPasswordError('Invalid password. Must be at least 8 characters long.');

    if (password.includes(' ')) throw new InvalidPasswordError('Invalid password. Must not contain spaces.');

    if (!/[A-Z]/.test(password)) throw new InvalidPasswordError('Invalid password. Must contain at least one uppercase letter.');

    if (!/[a-z]/.test(password)) throw new InvalidPasswordError('Invalid password. Must contain at least one lowercase letter.');

    if (!/[0-9]/.test(password)) throw new InvalidPasswordError('Invalid password. Must contain at least one number.');

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) throw new InvalidPasswordError('Invalid password. Must contain at least one special character.');

    return password;
  }
}
