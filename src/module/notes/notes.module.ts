import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Notes, NotesSchema } from '../../schemas/index';
import { NotesController } from './notes.controller';
import { NoteService } from './notes.service';


@Module({
    imports: [MongooseModule.forFeature([{ name: Notes.name, schema: NotesSchema }])
  ],
    exports: [NoteService],
    controllers: [NotesController],
    providers: [NoteService],
  })
  export class NotesModule {}