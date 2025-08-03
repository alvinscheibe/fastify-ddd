import { InvalidEmailError } from '@domain/errors/invalid-email-error';

export class Email {
  private readonly email: string;

  constructor(email: string) {
    Email.validate(email);
    this.email = email;
  }

  get value() {
    return this.email;
  }

  static validate(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) throw new InvalidEmailError('Invalid email format.');

    return email;
  }
}
