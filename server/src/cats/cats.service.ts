import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './cat.entity';

@Injectable()
export class CatsService {
    constructor(
        @InjectRepository(Cat)
        private readonly catRepository: Repository<Cat>,
    ) { }

    async create(cat: Cat): Promise<Cat> {
        const newCat = this.catRepository.create(cat);
        return await this.catRepository.save(newCat);
    }

    async findAll(): Promise<Cat[]> {
        return await this.catRepository.find();
    }
}
