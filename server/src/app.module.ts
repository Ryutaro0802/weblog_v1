import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Article } from './articles/article.entity';
import { TagEntity } from './tags/tag.entity';
import { ArticleModule } from './articles/article.module';
import { TagModule } from './tags/tag.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './db/sqlitedb.db',
      entities: [Article, TagEntity],
      synchronize: true,
    }),
    ArticleModule,
    TagModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
