import Fastify from 'fastify';

export const app = Fastify({
  logger: false,
});

app.get('/', (req, res) => {
  res.status(200).send({ message: 'Hello World' });
});