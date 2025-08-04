import { z } from 'zod';

const userSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  email: z.email(),
  password: z.string(),
  created_at: z.date(),
  updated_at: z.date().optional(),
});

const userParamsSchema = userSchema.pick({ id: true });

const userSchemaWithoutPassword = userSchema.omit({ password: true });

const userSchemaWithoutId = userSchema.omit({ id: true });

const createUserSchema = userSchemaWithoutId.extend({
  confirmPassword: z.string(),
});

const createUserSchemaRequest = createUserSchema.refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match.',
});

const listUsersSchemaResponse = {
  200: z.object({
    users: userSchemaWithoutPassword.array(),
  }),
};

export {
  userSchema,
  userSchemaWithoutPassword,
  userSchemaWithoutId,
  userParamsSchema,
  createUserSchema,
  createUserSchemaRequest,
  listUsersSchemaResponse,
};
