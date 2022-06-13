import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NotesDocument = Notes & Document;

@Schema()
export class Notes {

    @Prop({ required: true })
    email: string | undefined;

    @Prop({ required: true })
    _id : number | undefined;

    @Prop({ required: true })
    name : string | undefined;

    @Prop({ required: true })
    color : string | undefined;

    @Prop({ required: true })
    notes : string | undefined;
    
    // @Prop({ required: true })
    // pin : boolean | undefined;
            

}
export const NotesSchema = SchemaFactory.createForClass(Notes);


