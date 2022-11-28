import { Module } from '@nestjs/common';
import { ProdutosModule } from './produtos/produtos.module';
import { CarrinhoModule } from './carrinhos/carrinho.module';

@Module({
  imports: [ProdutosModule, CarrinhoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
