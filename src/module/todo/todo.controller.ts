import { Controller, Get, Request, UseGuards,Post, Body,Param, Delete, Patch } from '@nestjs/common';

import { todoDto } from './dto/todo.dto';
import { TodoService } from './todo.service';



@Controller('todo')
export class TodoController {
  constructor(private TodoService: TodoService) {}


  @Get('/:email')
  getTodo(@Param('email') email:string){
    return this.TodoService.findAllByEmail(email);
  }


  @Post('/create')
  createTodo(@Body()dto:todoDto){
    return this.TodoService.createTodo(dto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.TodoService.findOne(id);
  }
 

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.TodoService.remove(id);
  }
  
  @Patch(':id')
  update(@Param('id') id: number, @Body() todoDto: todoDto) {
    return this.TodoService.update(id, todoDto);
  }
  
}