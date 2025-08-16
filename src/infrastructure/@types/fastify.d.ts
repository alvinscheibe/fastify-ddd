import { UserRepository } from '@domain/repositories/user-repository';

declare module 'fastify' {
  interface FastifyInstance {
    userRepository: UserRepository;
  }
}
