import { IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { CategoriaProduto } from 'src/produtos/utils/CategoriaProduto.enum';

export class UpdateProdutoDto {
  // readonly id: string;

  @IsNotEmpty()
  @IsString()
  readonly nome: string;

  @IsNotEmpty()
  @IsString()
  readonly descricao: string;

  @IsNotEmpty()
  readonly valor: number;

  @IsNotEmpty()
  readonly disponivel: boolean;

  @IsNotEmpty()
  @IsEnum(CategoriaProduto)
  readonly categoria: CategoriaProduto;
}
