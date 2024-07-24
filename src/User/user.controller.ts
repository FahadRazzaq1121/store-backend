import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { CreateUserDto } from "./dto/create.user.dto";
import { UpdateUserDto } from "./dto/update.user.dto";
import { UserService } from "./user.service";
import { ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../Auth/jwt-auth.guard";

@ApiTags('users')
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    findAllUser() {
        console.log("getting All users")
        return this.userService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findUserById(@Param('id') id: number) {
        console.log(`get a user by its id ${id}`)
        return this.userService.findOne(id)
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    updateUser(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
        console.log(`User with id ${id} update successfully. Update User: ${updateUserDto}`);
        const values = this.userService.update(id, updateUserDto);
        return values
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        console.log(`User ${id} deleted successfully`);
        return this.userService.remove(id);

    }
}