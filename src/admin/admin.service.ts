import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from './entities/admin.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(
      @InjectRepository(Admin)
      private readonly adminRepository: Repository<Admin>
  
    ) {}

    async create(createAdminDto: CreateAdminDto) {
      const hash = await bcrypt.hash(createAdminDto.password);
      const AdminDto = {
        ...createAdminDto,
        password: hash,

      }

      const admin = this.adminRepository.create(AdminDto);
      return await this.adminRepository.save(admin);
    }
  
    async findAll() {
      return await this.adminRepository.find();
    }
  
    async findOne(idAdmin: number) {
      const admin = await this.adminRepository.findOneBy({idAdmin});
      if (!admin) {
        throw new Error('admin no encontrado');
      }
      return admin;
    }
  
    async update(idAdmin: number, updateAdminDto: UpdateAdminDto) {
      return await this.adminRepository.update(idAdmin,updateAdminDto);
    }
  
    async remove(idAdmin: number) {
      const result =  await this.adminRepository.delete(idAdmin);
      if (result.affected === 0) {
        throw new Error('Admin no encontrado');
      }
  
      return result;
    }
}
