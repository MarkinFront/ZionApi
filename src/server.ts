import express, { response } from 'express';
import swaggerUI from 'swagger-ui-express';
import swaggerDocument from '../swagger.json'

const apps = express();
apps.use(express.json());


apps.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

apps.get('/docs', (request, response) => {
  return response.sendFile(process.cwd() + '/doc.html');
});

apps.get('/swagger.json', (request, response) => {
  return response.sendFile(process.cwd() + '/swagger.json');
});

apps.listen(3333);