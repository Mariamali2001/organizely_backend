import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Task & Document;

@Schema()
export class Task {

    @Prop({ required: true })
    email: string | undefined;

    @Prop({ required: true })
    _id : number | undefined;

    @Prop({ required: true })
    name : string | undefined;

    @Prop({ required: true })
    color : string | undefined;
    
    @Prop({ required: true })
    taskid : number | undefined;
            

}
export const TodoSchema = SchemaFactory.createForClass(Task);
