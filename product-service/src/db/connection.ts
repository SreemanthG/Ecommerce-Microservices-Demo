import { DataSource } from 'typeorm';

const establishConnection = () => {
  const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'product-service-db',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    synchronize: true,
    entities: [
      'src/db/entities/**/*.ts',
    ],
    migrations: [
      'src/db/migrations/**/*.ts',
    ],
    subscribers: [
      'src/db/subscriber/**/*.ts',
    ],
  });
  AppDataSource.initialize()
    .then(() => {
      console.log('Data source has been initialized!');
    })
    .catch((err) => {
      console.error('Error during Data Source initialization', err);
    });
};

export default establishConnection;
