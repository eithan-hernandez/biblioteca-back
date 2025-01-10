import { Injectable } from '@nestjs/common';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Libro } from './entities/libro.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LibrosService {

  constructor(
      @InjectRepository(Libro)
      private readonly libroRepository: Repository<Libro>
  
    ) {}

  async create(createLibroDto: CreateLibroDto) {
    const libro = this.libroRepository.create(createLibroDto);
    return await this.libroRepository.save(libro);
  }

  async findAll() {
    return await this.libroRepository.find();
  }

  async findOne(idLibro: number) {
    const libro = await this.libroRepository.findOneBy({idLibro});
    if (!libro) {
      throw new Error('Libro no encontrado');
    }
    return libro;
  }

  async update(idLibro: number, updateLibroDto: UpdateLibroDto) {
    return await this.libroRepository.update(idLibro,updateLibroDto);
  }

  async remove(idLibro: number) {
    const result =  await this.libroRepository.delete(idLibro);
    if (result.affected === 0) {
      throw new Error('Libro no encontrado');
    }

    return result;
  }
}
