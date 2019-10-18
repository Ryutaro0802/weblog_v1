import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

    @Column()
    tagIds: string;
}
