import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './Entity/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthModule } from '../Auth/auth.module'; 

@Module({
  imports: [TypeOrmModule.forFeature([User]), forwardRef(() => AuthModule)],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService], 
})
export class UserModule {}
