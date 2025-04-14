import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import Projeto from './projeto.entity';
import { ProjetoRepository } from './projeto.repository';

@Controller('projeto')
export class ProjetoController {

constructor(private repo: ProjetoRepository){}


    @Post()
    async criarProject(@Body() projeto : Projeto){
      const novoProjeto = await this.repo.criarProjeto(projeto)
        return novoProjeto
        
    }

    @Get()
    async obterProjetos(){
       const projetos = await this.repo.obterProjetos()
        return projetos
    }

    @Delete(':id')

        async deletar(@Param('id') id : number){
            await this.repo.deletar(+id)

    }

}
