import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { TagsService } from './tags.service';
import { Tag } from './interface';
import { CreateTagDto } from './dto';

@Controller('tags')
export class TagsController {
    constructor(private readonly tagsService: TagsService) { }

    @Post()
    async create(@Body() createTagDto: CreateTagDto) {
        this.tagsService.create(createTagDto);
    }

    @Get()
    async findAll(): Promise<Tag[]> {
        return this.tagsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Tag> {
        return this.tagsService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<Tag> {
        return this.tagsService.remove(id);
    }
}
