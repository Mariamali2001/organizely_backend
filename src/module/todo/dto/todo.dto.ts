import {  IsNotEmpty, IsNumber } from 'class-validator';

export class todoDto {

  @IsNotEmpty()
  email!: string;

  @IsNotEmpty()
  name!: string;

  @IsNotEmpty()
  color!: string;

  @IsNumber()
  todoid!: number;

  @IsNotEmpty()
  complete!: boolean;
 


}