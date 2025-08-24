import { container } from '../container';
import { TYPES } from '../types';
import { UserRepository } from '@domain/repositories/user-repository';
import { env } from '@infrastructure/env';

import { UserRepositoryDrizzle } from '@infrastructure/repositories/drizzle/user-repository-drizzle';
import { UserRepositoryInMemory } from '@infrastructure/repositories/in-memory/user-repository-in-memory';

export function bindRepositories(): void {
  container.bind<UserRepository>(TYPES.UserRepository).toFactory(() => {
    if (env.NODE_ENV === 'test') return new UserRepositoryInMemory();

    return new UserRepositoryDrizzle();
  });
}
