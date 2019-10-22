import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { Article } from './interface';
import { CreateArticleDto } from './dto';

@Controller('articles')
export class ArticlesController {
    constructor(private readonly articlesService: ArticlesService) { }

    @Get()
    async findAll(): Promise<Article[]> {
        return this.articlesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.articlesService.findOne(id);
    }

    @Post()
    async create(@Body() createArticleDto: CreateArticleDto) {
        this.articlesService.create(createArticleDto);
    }
}
