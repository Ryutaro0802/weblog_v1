import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TagEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    label: string;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;
}
