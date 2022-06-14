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


  async addNotes(id: number): Promise<any> {
    let Not = await this.NotesModel.findOne({ _id: id }).exec();
    if (Not) {
      await this.NotesModel
        .updateOne(
          { _id: id },
          {
            $set: {
              notes: (Not.name),
            },
          },
          { upsert: true },
        )
        .exec();
    }
  }


  

}