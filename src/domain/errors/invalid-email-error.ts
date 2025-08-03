import { DomainError } from '@domain/errors/domain-error';

export class InvalidEmailError extends DomainError {
  constructor(message = 'Invalid email') {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
