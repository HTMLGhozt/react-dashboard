const path = require('path');
const fastify = require('fastify');
const fstatic = require('fastify-static');

const app = fastify({
  logger: process.env.NODE_ENV !== 'test',
});

if (process.env.NODE_ENV !== 'dev') {
  app.register(fstatic, {
    root: path.resolve(__dirname, '../dist'),
  });

  app.get('*', (req, reply) => {
    reply.sendFile('index.html');
  });
}
app.listen(3000, (error, address) => {
  if (error) throw error;
  const port = address.substring(address.lastIndexOf(':') + 1);
  console.info(`server listening on port: ${port}`);
});
