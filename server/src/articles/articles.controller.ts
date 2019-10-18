import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { Article } from './interfaces/article.interface';
import { CreateArticleDto } from './dto/create-article.dto';

@Controller('articles')
export class ArticlesController {
    constructor(private readonly articlesService: ArticlesService) { }

    @Post()
    async create(@Body() createArticleDto: CreateArticleDto) {
        console.log('contro', createArticleDto);
        this.articlesService.create(createArticleDto);
    }

    @Get()
    async findAll(): Promise<Article[]> {
        return this.articlesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `ID${id}のArticle`;
    }
}
