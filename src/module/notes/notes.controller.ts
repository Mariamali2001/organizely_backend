import { Controller, Get, Request, UseGuards,Post, Body,Param } from '@nestjs/common';

import { NotesDto } from './dto/notes.dto';
import { NoteService } from './notes.service';



@Controller('notes')
export class NotesController {
  constructor(private NoteService: NoteService) {}


  
  @Get('/:email')
  findNotes(@Param('email') email:string) {
    return this.NoteService.findAllbyEmail(email);
  }

  

  @Post('/note')
  addNotes(@Body()dto:NotesDto) {
    
    return this.NoteService.createNote(dto);
  }

  @Post('/delete')
  deleteNotes(@Body()_id:string) {
    return this.NoteService.remove(_id);
  }

  
  
}