import fastify from 'fastify';
import { serializerCompiler, validatorCompiler, ZodTypeProvider } from 'fastify-type-provider-zod';
import { errorHandler } from './error-handler';
import { UserRepositoryDrizzle } from '@infrastructure/repositories/drizzle/user-repository-drizzle';

export const app = fastify({
  logger: false,
}).withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.get('/', (req, res) => {
  res.status(200).send({ message: 'Hello World' });
});

app.setErrorHandler(errorHandler);

app.decorate('userRepository', new UserRepositoryDrizzle());
