import { Module } from '@nestjs/common';
import { LibrosModule } from './libros/libros.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    LibrosModule,
    

    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3307,
      username: "user_crud",
      password: "root",
      database: "db_crud",
      autoLoadEntities: true,
      synchronize: true,
    }),

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
