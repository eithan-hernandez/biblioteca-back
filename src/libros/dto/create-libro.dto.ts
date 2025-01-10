import { IsInt, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateLibroDto {

  @IsString()
  isbn: string;

  @IsString()
  titulo: string;

  @IsString()
  categoria: string;

  @IsString()
  autor: string;

  @IsInt()
  @IsPositive()
  paginas: number;

  @IsString()
  impresion: string;

  @IsString()
  precio: string;
  
  
  @IsString()
  @IsOptional()
  version?: string;

  
  @IsString()
  @IsOptional()
  descripcion?: string;

  
  @IsInt()
  @IsOptional()
  year?: number;
}
