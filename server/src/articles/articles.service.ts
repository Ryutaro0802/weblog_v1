import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './interface';
import { ArticleEntity } from './article.entity';
import { CreateArticleDto } from './dto';

@Injectable()
export class ArticlesService {
    constructor(
        @InjectRepository(ArticleEntity)
        private readonly articleRepository: Repository<ArticleEntity>,
    ) { }

    async create(createArticleDto: CreateArticleDto): Promise<ArticleEntity> {
        const newArticle: Article = new ArticleEntity();
        newArticle.title = createArticleDto.title;
        newArticle.text = createArticleDto.text;
        newArticle.tagIds = createArticleDto.tagIds;
        newArticle.createdAt = new Date();
        newArticle.updatedAt = new Date();
        // newArticle.tags = await this.tagRepository.find({ relations: ['tagIds'] });
        return await this.articleRepository.save(newArticle);
    }

    async findAll(): Promise<ArticleEntity[]> {
        return await this.articleRepository.find();
    }
}
