import {  IsNotEmpty, IsNumber } from 'class-validator';

export class todoDto {

  @IsNotEmpty()
  email!: string;

  @IsNumber()
  _id!: number;

  @IsNotEmpty()
  name!: string;

  @IsNotEmpty()
  color!: string;

  @IsNumber()
  taskid!: number;
 


 


}