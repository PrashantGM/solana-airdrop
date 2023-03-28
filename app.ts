import path from 'path';
import express from 'express';

import { config } from 'dotenv';
config();

import { router } from './route';

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use('/', express.static(path.join(__dirname, '/public')));

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
