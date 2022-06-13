import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Notes, NotesDocument } from './../../schemas/index';
import { Model } from 'mongoose';

import { NotesDto } from './dto/notes.dto';

@Injectable()
export class NoteService {
  constructor(@InjectModel(Notes.name) private postModel: Model<NotesDocument>) {}

    findAllbymail(email:string) {
      return this.postModel.find({ email : email }).exec();
    }

 
  async createNote(dto: NotesDto) {
    const newNote = new this.postModel(dto);
    return newNote.save();
  }


  




}