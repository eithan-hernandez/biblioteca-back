import { Module } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { LibrosController } from './libros.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Libro } from './entities/libro.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Libro])],
  controllers: [LibrosController,],
  providers: [LibrosService],
})
export class LibrosModule {}
