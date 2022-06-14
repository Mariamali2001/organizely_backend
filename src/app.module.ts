import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { NotesModule } from './module/notes/notes.module';
import { TodoModule } from './module/todo/todo.module';
import { NotesController } from './module/notes/notes.controller';
import {TodoController } from './module/todo/todo.controller';
require('dotenv').config();
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO),
    NotesModule,
    TodoModule,
   
  ],
  controllers: [
    AppController,
    NotesController ,
    TodoController
  ],
  providers: [AppService],
})
export class AppModule {}
