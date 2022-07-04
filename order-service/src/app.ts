import express, { Application } from 'express';
import * as dotenv from 'dotenv';

const app:Application = express();
dotenv.config();

const PORT = process.env.PORT || 7102;

app.listen(PORT, () => {
  console.log(`Order-Service started at port ${PORT}`);
});
