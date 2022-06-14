import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TodoSchema } from "../../schemas/index"
import {TodoController } from '../todo/todo.controller'
import {TodoService } from '../todo/todo.service';


@Module({
  imports: [MongooseModule.forFeature([{ name: Task.name, schema: TodoSchema }])

],
  exports: [TodoService],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}