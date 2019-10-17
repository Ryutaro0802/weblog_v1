import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('articles')
export class ArticlesController {
    @Get()
    findAll(): string {
        return 'Article';
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `ID${id}のArticle`;
    }
}
