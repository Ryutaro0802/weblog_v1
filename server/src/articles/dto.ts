export class CreateArticleDto {
    readonly title: string;
    readonly text: string;
    readonly tagIds: number[];
    readonly tagId: number;
}
