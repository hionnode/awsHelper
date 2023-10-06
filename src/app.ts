import fastify from 'fastify';
import fastifyPostgres from '@fastify/postgres';
import fastifyCors from '@fastify/cors';
import fastifySwagger from '@fastify/swagger';
import fastifyAutoload from '@fastify/autoload';
import { dirname, join } from 'path';
const app = fastify({ logger: true });

app.register(fastifyPostgres, {
    connectionString: 'postgres://postgres:postgres@localhost:5432/postgres'
});

app.register(fastifyCors, {
    origin: '*'
});

app.register(fastifySwagger, {
    routePrefix: '/docs',
    swagger: {
        info: {
            title: 'Fastify Boilerplate API',
            version: '1.0.0',
        },
    },
    exposeRoute: true,
});
const __dirname = dirname(new URL(import.meta.url).pathname);
app.register(fastifyAutoload, {
    dir: join(__dirname, 'routes')
});