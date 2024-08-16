import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './Entity/company.entity';
import { Repository } from 'typeorm';
import { CreateCompanyDto } from './dto/create.company.dto';
import { UpdateCompanyDto } from './dto/update.company.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly CompanyRepsitory: Repository<Company>,
  ) {}

  async findAll(): Promise<Company[]> {
    return this.CompanyRepsitory.find();
  }

  async findOne(id: number): Promise<Company> {
    return this.CompanyRepsitory.findOneBy({ id });
  }

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const newCompany = this.CompanyRepsitory.create(createCompanyDto);
    return this.CompanyRepsitory.save(newCompany);
  }

  async update(
    id: number,
    updateCompanyDto: UpdateCompanyDto,
  ): Promise<Company> {
    await this.CompanyRepsitory.update(id, updateCompanyDto);
    const updatedCompany = await this.findOne(id);
    return updatedCompany;
  }

  async remove(id: number): Promise<void> {
    await this.CompanyRepsitory.delete(id);
  }
}
