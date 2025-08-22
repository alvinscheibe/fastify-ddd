import { User } from '@domain/entities/user';
import { z } from 'zod';
import { userSchemaWithoutPassword } from '../validators/user-schema';
import { UserDto } from '@interfaces/dtos/user-dto';
import { Mapper } from '@interfaces/mappers/mapper';

type UserResponse = z.infer<typeof userSchemaWithoutPassword>;

export const userMapper: Mapper<UserDto, User> = {
  toDomain(user: UserDto): User {
    return User.create(user);
  },
  toResponse(user: User): UserResponse {
    return {
      id: user.id,
      name: user.name,
      email: user.email.value,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  },
};
