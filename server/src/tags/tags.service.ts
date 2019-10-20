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
        const newTag: Tag = new TagEntity();
        newTag.label = createTagDto.label;
        newTag.createdAt = new Date();
        newTag.updatedAt = new Date();
        return await this.tagRepository.save(newTag);
    }

    async findAll(): Promise<TagEntity[]> {
        return await this.tagRepository.find();
    }

    async findOne(id: number): Promise<TagEntity> {
        return await this.tagRepository.findOne(id);
    }
}
