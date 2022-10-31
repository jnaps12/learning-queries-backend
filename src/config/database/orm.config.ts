import { DataSource } from 'typeorm';
import { join } from 'path';
import { DataSourceOptions } from 'typeorm';

export const dbConfig = {
  type: 'mariadb',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'learning_queries',
  entities: [join(__dirname, '../../**/*.entity.{ts,js}')],
  migrations: [join(__dirname, '/migrations/*.{ts,js}')],
  synchronize: false,
};

export const dataSource = new DataSource(dbConfig as DataSourceOptions);
