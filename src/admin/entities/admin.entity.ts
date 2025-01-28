import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity('Admin')
export class Admin {
  @PrimaryGeneratedColumn()
  idAdmin: number;

  @Column()
  usuario: string;

  @Column()
  password: string;


}
