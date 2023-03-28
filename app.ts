import express from 'express';
import path from 'path';
import { router } from './controller';

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));

app.use('/', router);

app.listen(8000, () => {
  console.log('Listening on port 8000');
});
