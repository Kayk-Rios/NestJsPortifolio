import { Module } from '@nestjs/common';
import { ProjetosModule } from './projetos/projetos.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ProjetosModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
