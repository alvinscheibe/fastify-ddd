import Fastify from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { errorHandler } from './error-handler';

export const app = Fastify({
  logger: false,
}).withTypeProvider<ZodTypeProvider>();

app.get('/', (req, res) => {
  res.status(200).send({ message: 'Hello World' });
});

app.setErrorHandler(errorHandler);
