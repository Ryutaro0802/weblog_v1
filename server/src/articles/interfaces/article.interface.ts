export interface Article {
    id: number;
    title: string;
    text: string;
    createdAt: Date;
    updatedAt: Date;
    tagIds: string[];
}
