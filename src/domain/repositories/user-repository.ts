import { User } from '@domain/entities/user';

export interface UserRepository {
  save(user: User): Promise<void>;
  delete(id: string): Promise<void>;
  list(): Promise<User[]>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
}
