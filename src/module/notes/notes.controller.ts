import { Controller, Get, Request, UseGuards,Post, Body,Param } from '@nestjs/common';

import { NotesDto } from './dto/notes.dto';
import { NoteService } from './notes.service';



@Controller('notes')
export class NotesController {
  constructor(private NoteService: NoteService) {}
  

  
  @Get('/:email')
  posts(@Param('email') email:string) {
    return this.NoteService.findAllbyEmail(email);
  }

  @Post('/title/:id')
  likes(@Param('id') id:number) {
    return this.NoteService.addNotes(id);
  }

  @Post('/note')
  addPost(@Body()dto:NotesDto) {
    return this.NoteService.createNote(dto);
  }

  

  
  
}