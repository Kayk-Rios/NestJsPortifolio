import { Module } from '@nestjs/common';
import { ProjetoController } from './projeto.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ProjetoRepository } from './projeto.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [ProjetoController],
  providers: [ ProjetoRepository],
})
export class ProjetosModule {}
