import { app } from './app';
import { env } from '@infrastructure/env';

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => {
    console.log('✅ HTTP Server Running! Port:', 3333);
  })
  .catch((error) => {
    console.error('❌ Error starting server:', error);
    process.exit(1);
  });
