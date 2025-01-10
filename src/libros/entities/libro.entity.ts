import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Libro')
export class Libro {
  @PrimaryGeneratedColumn()
  idLibro: number;

  @Column()
  isbn: string;

  @Column()
  titulo: string;

  @Column()
  categoria: string;

  @Column()
  autor: string;

  @Column()
  paginas: number;

  @Column()
  impresion: string;

  @Column()
  precio: string;

  @Column({nullable: true})
  version: string;

  @Column({nullable: true})
  descripcion: string;

  @Column({nullable: true})
  year: number;
}
