import { Cat } from '../interfaces/cat.interface';

export class CreateCatDto implements Cat {
    readonly id: number;
    readonly name: string;
    readonly age: number;
    readonly breed: string;
}
