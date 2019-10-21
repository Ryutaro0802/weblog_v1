import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { TagEntity } from '../tags/tag.entity';

@Entity()
export class ArticleEntity {
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

    @Column('simple-array')
    tagIds: string[];

    @OneToMany(type => TagEntity, tag => tag.article, { eager: true})
    tags: TagEntity[];
}
