import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArticleEntity } from './article.entity';

@Injectable()
export class ArticlesService {
    constructor(
        @InjectRepository(ArticleEntity)
        private readonly articleRepository: Repository<ArticleEntity>,
    ) {}

    async create(article: ArticleEntity): Promise<ArticleEntity> {
        const newArticle = this.articleRepository.create(article);
        return await this.articleRepository.save(newArticle);
    }

    async findAll(): Promise<ArticleEntity[]> {
        return await this.articleRepository.find();
    }
}
