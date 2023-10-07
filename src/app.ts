import fastify from 'fastify';
import fastifyPostgres from '@fastify/postgres';
import fastifyCors from '@fastify/cors';
import fastifyAutoload from '@fastify/autoload';
import { dirname, join } from 'path';
const app = fastify({ logger: true });

app.register(fastifyPostgres, {
    connectionString: 'postgres://postgres:postgres@localhost:5432/postgres'
});

app.register(fastifyCors, {
    origin: '*'
});


const __dirname = dirname(new URL(import.meta.url).pathname);
app.register(fastifyAutoload, {
    dir: join(__dirname, 'routes')
});

export default app;