import { IsEmail, IsNotEmpty, IsNumber, isPhoneNumber , } from 'class-validator';

export class NotesDto {

  @IsNumber()
  _id!: number;
 
  @IsNotEmpty()
  gmail!: number;

  @IsNotEmpty()
  name!: string;

  @IsNotEmpty()
  no_likes!: number;

  
  @IsNotEmpty()
  no_downloads!: number;

  @IsNotEmpty()
  timing!: string;

  
  @IsNotEmpty()
  courseid!: string;


}