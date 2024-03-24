import { DataSource, DataSourceOptions } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  synchronize: false,
  entities: [__dirname + 'src/**/*.entity{.ts,.js}'],
  migrations: ['database/migrations/*.ts'],
};
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
