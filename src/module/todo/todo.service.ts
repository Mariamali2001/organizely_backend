import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Task, TodoDocument } from "../../schemas/index"
import { Model } from "mongoose";
import {SoftDeleteModel} from "soft-delete-plugin-mongoose";
import { todoDto } from "./dto/todo.dto";

@Injectable()
export class TodoService {
    constructor(
        @InjectModel(Task.name) private TodoModel: SoftDeleteModel <TodoDocument>,
        
      ) {}


      findAllByEmail(email:string) {
        return this.TodoModel.find({ email: email }).exec();
      }
      findOne(id: number) {
        return this.TodoModel.findById(id);
      }
      async createTodo(dto:todoDto) {
        const newTodo = new this.TodoModel(dto);
        return newTodo.save();
      }

      update(id: number, todoDto: todoDto) {
        const filter = { _id: id };
        return this.TodoModel.updateOne(filter,todoDto);
      }  
      async remove(id: number) {
        const filter  = { _id: id };
    
        const deleted = await this.TodoModel.softDelete(filter);
        return deleted; }
}