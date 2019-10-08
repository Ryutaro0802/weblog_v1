import { Controller, Get, Param, Body, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(@Req() request: Request): string {
        return 'ねこのページ';
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `ID${id}のねこ`;
    }
}
