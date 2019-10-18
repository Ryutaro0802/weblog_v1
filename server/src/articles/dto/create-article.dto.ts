import { Article } from '../interfaces/article.interface';

export class CreateArticleDto implements Article {
    readonly id: number;
    readonly title: string;
    readonly text: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly tagIds: string;
}
