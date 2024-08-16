import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'typeOrmConfig';
import { UserModule } from './User/user.module';
import { CompanyModule } from './Company/company.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), UserModule, CompanyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
