import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDto } from "./dto/create.user.dto";
import { UpdateUserDto } from "./dto/update.user.dto";
import { UserService } from "./user.service";



@Controller('users')
export class UserController{
    constructor(private readonly userService: UserService) {}

    @Get()
    findAllUser(){
        console.log("getting All users")
        return this.userService.findAll();
    }

    @Get(':id')
    findUserById(@Param('id') id:number){
        console.log(`get a user by its id ${id}`)
        return this.userService.findOne(id)
    }
    
    @Post()
    createUser(@Body() createUserDto: CreateUserDto){
        console.log(`user created successfully ${JSON.stringify(createUserDto)}`);
        const value =    this.userService.create(createUserDto);
        return value
    }

    @Put(':id')
    updateUser(@Param('id') id:number, @Body() updateUserDto: UpdateUserDto){
        console.log(`User with id ${id} update successfully. Update User: ${updateUserDto}`);
        const values = this.userService.update(id, updateUserDto);
        return values
    }

    @Delete(':id')
    deleteUser(@Param('id') id:number){
        console.log(`User ${id} deleted successfully`);
        return this.userService.remove(id);
        
    }
}