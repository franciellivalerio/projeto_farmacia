import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './entities/produto.entity';
import { ProdutoController } from './controllers/produto.controller';
import { ProdutoService } from './service/produto.service';
import { CategoriaModule } from '../categoria/categoria.module';
import { CategoriaService } from '../categoria/service/categoria.service';

@Module({
  imports: [TypeOrmModule.forFeature([Produto]),
CategoriaModule
],
  providers: [ ProdutoService, CategoriaService],
  controllers:  [ProdutoController],
  exports: [TypeOrmModule]

})
export class ProdutoModule {}