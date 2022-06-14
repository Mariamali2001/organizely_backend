import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Task, TodoDocument } from "../../schemas/index"
import { Model } from "mongoose";
import {SoftDeleteModel} from "soft-delete-plugin-mongoose";
import { todoDto } from "./dto/todo.dto";

@Injectable()
export class TodoService {
    constructor(
        @InjectModel(Task.name) private TodoModel: Model <TodoDocument>,
        
      ) {}


      findAllByEmail(email:string, todoid:number) {
        return this.TodoModel.find({ email: email,todoid:todoid  }).exec();
      }
     
      async createTodo(dto:todoDto) {
        const newTodo = new this.TodoModel(dto);
        return newTodo.save();
      }

     async update(id: string) {

        let todo = await this.TodoModel.findOne({ _id:id }).exec();
        if (todo) {
      return await this.TodoModel
        .updateOne(
          { _id: id },
          {
            $set: {
              complete: !todo.complete,
            },
          },
          { upsert: true },
        )
        .exec();
    }
      }  


      async remove(id: string) {
        const filter  = { _id: id };
    
        const deleted = await this.TodoModel.remove(filter);
        return deleted; }
}