import { Injectable } from '@nestjs/common';
import { Projetos } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ProjetoRepository {
    constructor(private prismaservice : PrismaService){}
    
    async obterProjetos() {
        return this.prismaservice.projetos.findMany();
    }

    async criarProjeto( projeto : Projetos){
        return this.prismaservice.projetos.create({
            data: projeto as any,
        })
    }

    async atualizarProjeto(projeto: Projetos){
        return this.prismaservice.projetos.update({
            where: {
                id: projeto.id
            },
            data: projeto as any,
        })
    }

    async deletar(id: number){
        return this.prismaservice.projetos.delete({
            where:{
                id,
            }
        })
    }
}
