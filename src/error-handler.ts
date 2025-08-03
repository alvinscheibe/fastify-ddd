import type { FastifyInstance } from 'fastify';
import { hasZodFastifySchemaValidationErrors } from 'fastify-type-provider-zod';

type FastifyErrorHandler = FastifyInstance['errorHandler'];

export const errorHandler: FastifyErrorHandler = async (error, _, reply) => {
  if (hasZodFastifySchemaValidationErrors(error)) {
    const errors = error.validation.map((e) => e.message);

    return reply.status(400).send({
      message: 'Validation error',
      errors,
    });
  }

  return reply.status(500).send({ message: 'Internal Server Error' });
};
