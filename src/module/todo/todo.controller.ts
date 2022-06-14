import { Controller, Get, Request, UseGuards,Post, Body,Param, Delete, Patch } from '@nestjs/common';

import { todoDto } from './dto/todo.dto';
import { TodoService } from './todo.service';



@Controller('todo')
export class TodoController {
  constructor(private TodoService: TodoService) {}


  @Get('/todos')
  getTodo(@Body() email:string, todoid:number){
    return this.TodoService.findAllByEmail(email,todoid);
  }


  @Post('/create')
  createTodo(@Body()dto:todoDto){
    return this.TodoService.createTodo(dto);
  }


  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.TodoService.remove(id);
  }
  
  @Patch('/:id')
  update(@Param('id') id: string) {
    return this.TodoService.update(id);
  }
  
}