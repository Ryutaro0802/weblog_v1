import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Tag } from '../tags/interfaces/tag.interface';

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    text: string;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    @Column('text', { array: true })
    tags: [];
}
