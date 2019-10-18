import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './article.entity';

@Injectable()
export class ArticlesService {
    constructor(
        @InjectRepository(Article)
        private readonly articleRepository: Repository<Article>,
    ) {}

    async create(article: Article): Promise<Article> {
        console.log(article);
        const newArticle = this.articleRepository.create(article);
        console.log(newArticle);
        return await this.articleRepository.save(newArticle);
    }

    async findAll(): Promise<Article[]> {
        return await this.articleRepository.find();
    }
}
