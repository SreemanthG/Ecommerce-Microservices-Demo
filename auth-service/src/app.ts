import express, { Application } from 'express';
import * as dotenv from 'dotenv';

const app:Application = express();
dotenv.config();

const PORT = process.env.PORT || 7100;

app.listen(PORT, () => {
  console.log(`Auth-Service started at port ${PORT}`);
});
