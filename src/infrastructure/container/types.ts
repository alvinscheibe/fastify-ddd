export const TYPES = {
  // Repositories
  UserRepository: Symbol.for('UserRepository'),

  // Use Cases
  CreateUserUseCase: Symbol.for('CreateUserUseCase'),
  GetUserUseCase: Symbol.for('GetUserUseCase'),
  ListUsersUseCase: Symbol.for('ListUsersUseCase'),
  DeleteUserUseCase: Symbol.for('DeleteUserUseCase'),

  // Controllers
  UserController: Symbol.for('UserController'),

  // Services
  DatabaseConnection: Symbol.for('DatabaseConnection'),
  Logger: Symbol.for('Logger'),
} as const;

export type DITypes = typeof TYPES;
