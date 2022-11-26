import { CategoriaProduto } from './utils/CategoriaProduto.enum';

export class Product {
  id: number;

  name: string;

  price: number;

  description: string;

  disponivel: boolean;

  category: CategoriaProduto;
}
