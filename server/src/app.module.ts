import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cats/cat.module';
import { Cat } from './cats/cat.entity';
import { ArticlesController } from './articles/articles.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './db/sqlitedb.db',
      entities: [Cat],
      synchronize: true,
    }),
    CatModule,
  ],
  controllers: [AppController, ArticlesController],
  providers: [AppService],
})
export class AppModule { }
