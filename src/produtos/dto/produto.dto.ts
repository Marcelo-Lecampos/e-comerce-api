import { IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { CategoriaProduto } from '../utils/CategoriaProduto.enum';

export class ProdutoDTO {
  // Os produtos serão representados pelos seguintes atributos:
  // - nome
  // - valor: float
  // - descricao
  // - disponivel: bool // Padrão é true
  // - e um enum categoria

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
