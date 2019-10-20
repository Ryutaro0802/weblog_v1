import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tag } from './tag.entity';

@Injectable()
export class TagsService {
    constructor(
        @InjectRepository(Tag)
        private readonly tagRepository: Repository<Tag>,
    ) {}

    async create(tag: Tag): Promise<Tag> {
        const newTag = this.tagRepository.create(tag);
        return await this.tagRepository.save(newTag);
    }

    async findAll(): Promise<Tag[]> {
        return await this.tagRepository.find();
    }
}
