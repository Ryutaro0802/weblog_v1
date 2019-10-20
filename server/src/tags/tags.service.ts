import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TagEntity } from './tag.entity';
import { Tag } from './interface';
import { CreateTagDto } from './dto';

@Injectable()
export class TagsService {
    constructor(
        @InjectRepository(TagEntity)
        private readonly tagRepository: Repository<TagEntity>,
    ) {}

    async create(createTagDto: CreateTagDto): Promise<TagEntity> {
        const tag = new TagEntity();
        tag.label = createTagDto.label;
        tag.createdAt = new Date();
        tag.updatedAt = new Date();
        const newTag: Tag = tag;
        return await this.tagRepository.save(newTag);
    }

    async findAll(): Promise<TagEntity[]> {
        return await this.tagRepository.find();
    }
}
