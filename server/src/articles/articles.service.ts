import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, createConnection } from 'typeorm';
import { Article } from './interface';
import { ArticleEntity } from './article.entity';
import { CreateArticleDto } from './dto';
import { TagEntity } from '../tags/tag.entity';

@Injectable()
export class ArticlesService {
    constructor(
        @InjectRepository(ArticleEntity)
        private readonly articleRepository: Repository<ArticleEntity>,
        @InjectRepository(TagEntity)
        private readonly tagRepository: Repository<TagEntity>,
    ) { }

    async create(createArticleDto: CreateArticleDto): Promise<ArticleEntity> {
        const newArticle = new ArticleEntity();
        newArticle.title = createArticleDto.title;
        newArticle.text = createArticleDto.text;
        newArticle.tagIds = createArticleDto.tagIds;
        newArticle.createdAt = new Date();
        newArticle.updatedAt = new Date();
        // newArticle.tags = createArticleDto.tagIds.map(async (id: string) => {
        //     return await this.tagRepository.findOne(parseInt(id, 10));
        // });
        newArticle.tags = await this.tagRepository.find();
        console.log(createArticleDto);
        console.log(newArticle);
        return await this.articleRepository.save(newArticle);
    }

    async findAll(): Promise<ArticleEntity[]> {
        return await this.articleRepository.find();
    }
}
