import { container } from '../container';
import { TYPES } from '../types';
import { UserRepository } from '@domain/repositories/user-repository';

import { CreateUserUseCase } from '@application/use-cases/users/create-user-use-case';

export function bindUseCases(): void {
  container.bind(TYPES.CreateUserUseCase).toFactory(() => {
    const userRepository = container.get<UserRepository>(TYPES.UserRepository);
    return new CreateUserUseCase(userRepository);
  });
}
