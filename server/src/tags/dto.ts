import { Tag } from './interface';

export class CreateTagDto implements Tag {
    readonly id: number;
    readonly label: string;
    readonly createdAt: Date;
}
