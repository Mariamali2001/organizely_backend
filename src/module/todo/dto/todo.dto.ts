import { IsEmail, isNotEmpty, IsNotEmpty, IsNumber, isPhoneNumber , } from 'class-validator';

export class todoDto {

  @IsNotEmpty()
  faculty!: string;

  @IsNotEmpty()
  name!: string;
 
  @IsNumber()
  code!: number;

 


}