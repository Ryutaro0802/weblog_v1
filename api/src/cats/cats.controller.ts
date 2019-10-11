import { Controller, Get, Param, Res, Body, Req, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(@Req() request: Request): string {
        return 'ねこのページ';
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
