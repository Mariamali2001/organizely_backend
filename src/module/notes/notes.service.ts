import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Notes, NotesDocument } from '../../schemas/index';
import { Model } from 'mongoose';

import { NotesDto } from './dto/notes.dto';

@Injectable()
export class NoteService {
  constructor(@InjectModel(Notes.name) private NotesModel: Model<NotesDocument>) {}

    findAllbyEmail(email:string) {
      return this.NotesModel.find({ email : email }).exec();
    }

 
  async createNote(dto: NotesDto) {
    const newNote = new this.NotesModel(dto);
    return newNote.save();
  }


  async remove(id: string) {
    const filter  = { _id: id };

    const deleted = await this.NotesModel.remove(filter);
    return deleted; }

 


  

}