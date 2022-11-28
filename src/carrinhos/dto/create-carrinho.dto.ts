import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty } from 'class-validator';
import { CreateProdutoDto } from 'src/produtos/dto/create-produto.dto/create-produto.dto';
import { Product } from 'src/produtos/produtos.entity';

export class CreateCarrinhoDto {
  //  - usuario (defina 1 por padrão, não será construído entidade de usuário)
  // - valor: float
  // - produtos: Produto[]

  @IsNotEmpty()
  readonly usuario: string;

  @IsNotEmpty()
  readonly valor: number;

  @IsNotEmpty()
  @IsArray()
  @Type(() => CreateProdutoDto)
  readonly produtos: CreateProdutoDto[];
}
