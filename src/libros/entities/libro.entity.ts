import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Libro')
export class Libro {
  @PrimaryGeneratedColumn()
  idLibro: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  isbn: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  titulo: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  categoria: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  autor: string;

  @Column({ type: 'int', nullable: true })
  paginas: number;

  @Column({ type: 'varchar', length: 150, nullable: true })
  impresion: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  precio: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  version: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'int', nullable: true })
  year: number;
}
