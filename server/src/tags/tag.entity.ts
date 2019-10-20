import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tag {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    label: string;

    @Column()
    createdAt: Date;
}
