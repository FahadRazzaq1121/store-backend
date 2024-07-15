import { BadRequestException, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "./Entity/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "./dto/create.user.dto";
import { UpdateUserDto } from "./dto/update.user.dto";
import { plainToClass } from "class-transformer";
import * as bcrypt from 'bcryptjs';
import { validate } from "class-validator";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ){}

    findAll(){
        return this.userRepository.find();
    }
    findOne(id: number){
        return this.userRepository.findOneBy({id});
    }
    async create(createUserDto: CreateUserDto): Promise<{ message: string; user: User }> {
        const newUser = plainToClass(CreateUserDto, createUserDto);
        const hashedPassword = await bcrypt.hash(newUser.password, 5); 
        newUser.password = hashedPassword;
        const errors = await validate(newUser);
        if (errors.length > 0) {
          throw new BadRequestException(errors);
        }
        const savedUser = await this.userRepository.save(newUser);
        return { message: "User Created Successfully", user: savedUser };
      }
    

      async update(id: number, updateUserDto: UpdateUserDto): Promise<{ message: string; user: User }> {
        await this.userRepository.update(id, updateUserDto);
        const updatedUser = await this.findOne(id);
        return { message: "User Updated Successfully", user: updatedUser };
      }

      async remove(id: number): Promise<{ message: string }> {
        await this.userRepository.delete({ id });
        return { message: "User Deleted Successfully" };
      }
    }