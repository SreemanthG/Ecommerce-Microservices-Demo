import express, { Application } from 'express';
import * as dotenv from 'dotenv';

const app:Application = express();
dotenv.config();

const PORT = process.env.PORT || 7101;

app.listen(PORT, () => {
  console.log(`Product-Service started at port ${PORT}`);
});
