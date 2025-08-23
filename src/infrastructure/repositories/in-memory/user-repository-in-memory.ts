import { User } from '@domain/entities/user';
import { UserRepository } from '@domain/repositories/user-repository';
import { userMapper } from '@interfaces/mappers/user-mapper';

export class UserRepositoryInMemory implements UserRepository {
  private users: User[] = [];

  async save(user: User): Promise<void> {
    this.users.push(user);
  }

  async delete(id: string): Promise<void> {
    this.users = this.users.filter((user) => user.id !== id);
  }

  async list(): Promise<User[]> {
    return this.users.map((user) =>
      userMapper.toDomain({
        id: user.id,
        name: user.name,
        email: user.email.value,
        password: user.password.value,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      }),
    );
  }

  async findById(id: string): Promise<User | null> {
    const user = this.users.find((user) => user.id === id);

    return user
      ? userMapper.toDomain({
          id: user.id,
          name: user.name,
          email: user.email.value,
          password: user.password.value,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        })
      : null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find((user) => user.email.value === email);

    return user
      ? userMapper.toDomain({
          id: user.id,
          name: user.name,
          email: user.email.value,
          password: user.password.value,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        })
      : null;
  }
}
