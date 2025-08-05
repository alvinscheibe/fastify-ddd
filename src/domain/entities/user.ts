import { randomUUID } from 'node:crypto';
import { Email } from '@domain/value-objects/email';
import { Password } from '@domain/value-objects/password';

interface UserProps {
  id: string;
  name: string;
  email: Email;
  password: Password;
  createdAt: Date;
  updatedAt?: Date;
}

export class User {
  private readonly props: UserProps;

  constructor(props: UserProps) {
    this.props = props;
  }

  static create(props: { id?: string; name: string; email: string; password: string }): User {
    return new User({
      id: props.id ?? randomUUID(),
      name: props.name,
      email: new Email(props.email),
      password: new Password(props.password),
      createdAt: new Date(),
      updatedAt: undefined,
    });
  }

  get id(): string {
    return this.props.id;
  }

  get name(): string {
    return this.props.name;
  }

  get email(): Email {
    return this.props.email;
  }

  get password(): Password {
    return this.props.password;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date | undefined {
    return this.props.updatedAt;
  }
}
