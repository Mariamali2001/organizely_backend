import { IsNotEmpty, IsNumber } from 'class-validator';

export class NotesDto {

  @IsNotEmpty()
  email!: string;
 
  @IsNumber()
  _id!: number;

  @IsNotEmpty()
  name!: string;

  @IsNotEmpty()
  color!: string;
  
  @IsNotEmpty()
  notes!: string;
  
  @IsNotEmpty()
  image!: string;

}