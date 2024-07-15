import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDto } from "./dto/create.user.dto";
import { UpdateUserDto } from "./dto/update.user.dto";



@Controller('users')
export class UserController{


    @Get()
    findAllUser(){
        console.log("getting All users")
    }

    @Get(':id')
    findUserById(@Param('id') id:number){
        console.log(`get a user by its id ${id}`)
    }
    
    @Post()
    createUser(@Body() CreateUserDto: CreateUserDto){
        console.log(`user created successfully ${CreateUserDto}`);   
    }

    @Put(':id')
    updateUser(@Param('id') id:number, @Body() UpdateUserDto: UpdateUserDto){
        console.log(`User with id ${id} update successfully. Update User: ${UpdateUserDto}`);
        
    }

    @Delete(':id')
    deleteUser(@Param('id') id:number){
        console.log(`User ${id} deleted successfully`);
        
    }
}