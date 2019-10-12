import { Controller, Get, Param, Res, Body, Req, HttpStatus, Post } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { Request, Response } from 'express';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Get('json')
    findJson(@Res() res: Response) {
        res.status(HttpStatus.OK).json({
            test: 'test',
        });
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `ID${id}のねこ`;
    }
}
