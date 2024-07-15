import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';

const config: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'store_shop.sqlite',
  entities: [path.join(__dirname, '**/*.entity{.ts,.js}')],
  synchronize: true,
};

export default config;