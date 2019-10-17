import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cats/cat.module';
import { Cat } from './cats/cat.entity';
import { Article } from './articles/article.entity';
import { ArticleModule } from './articles/article.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './db/sqlitedb.db',
      entities: [Article],
      synchronize: true,
    }),
    ArticleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
