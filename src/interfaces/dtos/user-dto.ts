import { z } from 'zod';
import { listUsersSchemaResponse, userSchema, userSchemaWithoutId } from '../validators/user-schema';

type UserDto = z.infer<typeof userSchema>;
type CreateUserDto = z.infer<typeof userSchemaWithoutId>;
type ListUsersResponseDto = z.infer<(typeof listUsersSchemaResponse)['200']>;

export { UserDto, CreateUserDto, ListUsersResponseDto };
