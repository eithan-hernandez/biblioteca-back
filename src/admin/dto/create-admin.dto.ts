import { IsNotEmpty, MinLength, MaxLength, IsString } from "class-validator";

export class CreateAdminDto {
    @IsNotEmpty() 
    @IsString()
    usuario:string

    @IsNotEmpty()
    @IsString()
    password:string

}
